FROM node:16-alpine3.11 as apps-login
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.20.1-alpine
COPY --from=apps-login /app/nginx.conf /etc/nginx/
COPY --from=apps-login /app/build /app
