FROM node

WORKDIR /usr/src

COPY ./common ./common
COPY ./jwt-authenticator/package*.json ./app/

RUN npm --prefix ./app install

COPY ./jwt-authenticator ./app/

ENV PORT 8000
EXPOSE 8000
ENTRYPOINT [ "npm", "run", "--prefix", "./app" ]
CMD [ "start" ]
