FROM node:24-trixie-slim

WORKDIR /site

COPY package*.json /site/

RUN apt-get update && apt-get upgrade -y
RUN apt-get install git curl -y

# RUN npm install

# Install Vale
RUN set -eux; \
    ARCH=$(uname -m); \
    if [ "$ARCH" = "x86_64" ]; then \
        VALE_ARCH="64-bit"; \
    elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then \
        VALE_ARCH="arm64"; \
    else \
        echo "Unsupported architecture: $ARCH"; exit 1; \
    fi; \
    curl -L -o vale.tar.gz "https://github.com/errata-ai/vale/releases/download/v3.13.0/vale_3.13.0_Linux_${VALE_ARCH}.tar.gz"; \
    tar -xzf vale.tar.gz; \
    mv vale /usr/local/bin/vale; \
    rm vale.tar.gz; \
    vale --version

ENV HOST=0.0.0.0
ENV PORT=4321

# Expose the dev server port
EXPOSE 4321
