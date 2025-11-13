#DockerFile
FROM node:22.12.0-alpine3.21

# Creating the required directories
RUN mkdir -p /usr/src/
RUN mkdir -p /logs
# Copying the source code.
WORKDIR /usr/src
COPY . .
# Installing dependencies and building application.
RUN apk add --no-cache --virtual .build-deps python3 py3-pip make gcc g++ \
    && npm install -g npm@8.19.2 \
#    && npm install -g @nestjs/cli \
    && npm install --production \
    && npm run build \
    && npm prune --production \
    && apk del .build-deps
#    && npm install -g @nestjs/cli
# Change this port to whatever port needs to be exposed.
RUN apk --no-cache upgrade
EXPOSE 3000
CMD ["npm", "run", "start:prod"]

