FROM node:latest as frontend
WORKDIR /django/frontend
COPY ./frontend /django/frontend
RUN npm install
RUN npm run build


FROM python:3.10.7-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY --from=frontend /django/frontend ./frontend
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . .
