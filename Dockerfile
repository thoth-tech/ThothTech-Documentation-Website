FROM node:iron-trixie-slim

WORKDIR /site

COPY package*.json /site/

RUN apt-get update && apt-get upgrade -y
RUN apt-get install git curl -y

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321

# Expose the dev server port
EXPOSE 4321

# Start the dev server
CMD ["npm", "run", "dev"]