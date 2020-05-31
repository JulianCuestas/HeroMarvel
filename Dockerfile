#Stage 1
FROM node:12.17.0-stretch as node
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build -- --prod

#Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/Marvel /usr/share/nginx/html