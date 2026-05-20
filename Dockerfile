FROM php:8.3-cli-bookworm

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    git unzip libzip-dev \
    && docker-php-ext-install -j"$(nproc)" zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
EXPOSE 8000
