FROM node:18.3.0 AS build
WORKDIR /app
COPY . /app
RUN npm install --unsafe-perm  \
    && npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]