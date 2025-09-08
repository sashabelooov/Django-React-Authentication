FROM node:18-alpine

WORKDIR /app

# dependencies o‘rnatamiz
COPY package*.json /app/
RUN npm install

# app kodlarini qo‘shamiz
COPY . /app/

# build qilamiz
RUN npm run build

# nginx orqali serve qilamiz
FROM nginx:1.25-alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
