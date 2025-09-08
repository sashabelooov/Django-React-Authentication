FROM python:3.11-slim

# sistem paketlar
RUN apt-get update && apt-get install -y \
    build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# requirements.txt qo‘shamiz
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# project kodlarini qo‘shamiz
COPY . /app/

# Django uchun default port
EXPOSE 8000

# Gunicorn orqali ishga tushirish
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
