FROM node

WORKDIR /usr/src

COPY ./common ./common
COPY ./jwt-resource/package*.json ./app/

RUN npm --prefix ./app install

COPY ./jwt-resource ./app/

ENV PORT 8100
EXPOSE 8100
ENTRYPOINT [ "npm", "run", "--prefix", "./app" ]
CMD [ "start" ]
