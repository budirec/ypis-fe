FROM nginx:stable

WORKDIR /var/www

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

CMD [ "/start.sh" ]
