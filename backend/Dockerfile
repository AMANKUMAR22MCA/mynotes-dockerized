# Use a lightweight Python image
FROM python:3.9-alpine

# Set the working directory inside the container
WORKDIR /app

# Install curl (and bash) to enable fetching the wait-for-it.sh script
RUN apk add --no-cache curl bash

# Copy and install dependencies
COPY requirements.txt requirements.txt

# install requirements for the project
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project into the container
COPY . .

EXPOSE 8000

CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && gunicorn --bind 0.0.0.0:8000 --worker-class gthread --workers 1 --log-level info --timeout 6000 mynotes.wsgi:application"]