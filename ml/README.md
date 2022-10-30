# Posts' sentiment analyser
Python application for running posts' sentiment analysis using transformers from HuggingFace.

## Local usage
### Build
```bash
./setup.sh
```

### Start server
```bash
source .venv/bin/activate
FLASK_APP=src/app.py flask run
```

### Run example inference
```bash
python3 demo_client.py

Input text: What a crowd 🔥🔥🔥 Thank you Buenos Aires and everyone watching in cinemas around the world. More screenings on Saturday
Code: 200
Scores: [['positive', '0.9871'], ['neutral', '0.0118'], ['negative', '0.0011']]
Result: positive (0.9871)
```

```bash
python3 demo_client.py -t "I really hate the experience and will never do that again"

Input text: I really hate the experience and will never do that again
Code: 200
Scores: [['negative', '0.9806'], ['neutral', '0.0161'], ['positive', '0.0033']]
Result: negative (0.9806)
```

```bash
python3 demo_client.py --help
usage: demo_client.py [-h] [-t TEXT]

Simple utility for sending requests to the Posts' sentiment analyser

optional arguments:
  -h, --help            show this help message and exit
  -t TEXT, --text TEXT  custom text to classify
```