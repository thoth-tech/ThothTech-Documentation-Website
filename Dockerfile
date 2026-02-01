FROM node:iron-trixie-slim

WORKDIR /site

COPY package*.json /site/

RUN apt-get update && apt-get upgrade -y
RUN apt-get install git curl -y

RUN npm install

# Install Vale
RUN curl -L -o vale.tar.gz "https://github.com/errata-ai/vale/releases/download/v3.13.0/vale_3.13.0_Linux_64-bit.tar.gz" \
  && tar -xzf vale.tar.gz \
  && mv vale /usr/local/bin/vale \
  && rm vale.tar.gz \
  && vale --version

ENV HOST=0.0.0.0
ENV PORT=4321

# Expose the dev server port
EXPOSE 4321
