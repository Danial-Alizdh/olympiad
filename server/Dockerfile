FROM python:3.10.0-alpine

WORKDIR /usr/app

COPY . .

RUN pip install -r requirements.txt

CMD uvicorn server:app --host 0.0.0.0 --port 10000
