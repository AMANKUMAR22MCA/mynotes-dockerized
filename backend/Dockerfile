# FROM python:3.9-alpine

# WORKDIR /app    

# COPY requirements.txt requirements.txt

# RUN pip install -r requirements.txt


# COPY . .

# RUN python manage.py makemigrations

# RUN  python manage.py migrate

# CMD [ "python","manage.py","runserver","0.0.0.0:8000" ]


# Use a lightweight Python image
FROM python:3.9-alpine

# Set the working directory inside the container
WORKDIR /app
# Install curl (and bash) to enable fetching the wait-for-it.sh script
RUN apk add --no-cache curl bash

# Copy and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project into the container
COPY . .

# Install netcat to check if PostgreSQL is available (for wait-for-it)
RUN apk --no-cache add bash netcat-openbsd

# Download the wait-for-it.sh script (fetch it from the official URL)
# RUN curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
#     chmod +x /wait-for-it.sh

# RUN ["wait-for-it.sh db:5432"]
# Make migrations (Optional: You can handle migrations outside the container)
# RUN python manage.py collectstatic --noinput
# RUN python manage.py makemigrations
# RUN python manage.py migrate
# Expose the default port for Gunicorn
EXPOSE 8000

# Start the app using Gunicorn
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "mynotes.wsgi:application"]

# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--worker-class", "gevent", "mynotes.wsgi:application"]
# Command to start the app, using wait-for-it.sh to ensure PostgreSQL is ready
# CMD ["sh", "-c",  gunicorn --bind 0.0.0.0:8000 --worker-class gthread --workers 1 --log-level info --timeout 6000 mynotes.wsgi:application"]
# CMD ["sh", "-c", "gunicorn --bind 0.0.0.0:8000 --worker-class gthread --workers 1 --log-level info --timeout 6000 mynotes.wsgi:application"]

# ENTRYPOINT ensures the app waits for PostgreSQL before starting Django commands
ENTRYPOINT ["./wait-for-it.sh", "db:5432", "--", "sh", "-c", "python manage.py makemigrations && python manage.py migrate && gunicorn --bind 0.0.0.0:8000 --worker-class gthread --workers 1 --log-level info --timeout 6000 mynotes.wsgi:application"]