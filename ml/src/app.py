import logging
from typing import Dict

from flask import Flask, jsonify, request
import numpy as np
from scipy.special import softmax

import model_utils

logger = logging.getLogger("ml_model")

# Tasks:
# emoji, emotion, hate, irony, offensive, sentiment
# stance/abortion, stance/atheism, stance/climate, stance/feminist, stance/hillary
task = "sentiment"
model_name = f"cardiffnlp/twitter-roberta-base-{task}"
mapping_link = f"https://raw.githubusercontent.com/cardiffnlp/tweeteval/main/datasets/{task}/mapping.txt"

tokenizer = model_utils.load_tokenizer(model_name)
model = model_utils.load_model(model_name)
labels = model_utils.load_labels(mapping_link)

def _classify(text: str) -> Dict:
    encoded_input = tokenizer(text, return_tensors='pt')
    output = model(**encoded_input)
    scores = output[0][0].detach().numpy()
    scores = softmax(scores)

    ranking = np.argsort(scores)[::-1]
    sort_by_ranking = lambda x_list: [x for _, x in sorted(zip(ranking, x_list), key=lambda x: x[0])]
    
    return [(label, str(round(score, 4))) for (label, score) in zip(
        sort_by_ranking(labels), 
        sort_by_ranking(scores)
    )]

app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def classify():
    if request.method == 'POST':
        text = request.form['text']
        out = _classify(text)
        return jsonify(out)

if __name__ == "__main__":
    app.run()