FROM node:18

WORKDIR /app

COPY . /app

RUN pnpm i

RUN pnpm run build

EXPOSE 3000

CMD ["pnpx","serve","dist"]