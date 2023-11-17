FROM node:18-alpine as builder

RUN mkdir -p /next
WORKDIR /next

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.16.0-alpine

COPY --from=builder /next/out /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
