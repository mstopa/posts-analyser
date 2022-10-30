FROM python:3.8-slim

WORKDIR /opt/posts_sentiment_analyser

COPY . .

RUN python -m pip install --upgrade pip setuptools wheel ;
RUN pip install torch --extra-index-url https://download.pytorch.org/whl/cpu
RUN pip install -r requirements.txt

RUN pip install .

ENTRYPOINT [ "waitress-serve", "--call", "posts_sentiment_analyser:create_app" ]