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

waitress-serve --port 8080 --call posts_sentiment_analyser:create_app
INFO:waitress:Serving on http://127.0.0.1:8080
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
usage: demo_client.py [-h] [-t TEXT] [--host HOST] [-p PORT]

Simple utility for sending requests to the Posts' sentiment analyser

optional arguments:
  -h, --help            show this help message and exit
  -t TEXT, --text TEXT  custom text to classify
  --host HOST           custom host
  -p PORT, --port PORT  custom port
```

## Docker
### Build image
```bash
docker build -t "posts-sentiment-analyser:<IMAGE_TAG>" .
```

### Start server
```bash
docker run --name "ml-server" -p <PORT>:8080 posts-sentiment-analyser:<IMAGE_TAG>

INFO:waitress:Serving on http://0.0.0.0:8080
```

### Run inference
```bash
python3 -m venv venv && source venv/bin/activate && pip install requests 

python3 demo_client.py --port <PORT>                                      
Input text: What a crowd 🔥🔥🔥 Thank you Buenos Aires and everyone watching in cinemas around the world. More screenings on Saturday
Code: 200
Scores: [['positive', '0.9871'], ['neutral', '0.0118'], ['negative', '0.0011']]
Result: positive (0.9871)
```