# FROM node:16-alpine3.11 as apps-login
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 3030
# ENTRYPOINT ["npm","start"]

FROM nginx