# image 1
FROM node:18-slim AS build
RUN groupadd -r myuser && useradd -r -g myuser -m myuser
WORKDIR /app
COPY package*.json /app/
COPY tsconfig.json /app/
RUN npm install --production
USER myuser
COPY ./index.ts /app/

# image 2
FROM node:18-slim
RUN groupadd -r myuser && useradd -r -g myuser -m myuser
WORKDIR /app
COPY --from=index.ts /app/ /app/
COPY --from=index.ts /app/ /app/
RUN npm install --production
USER myuser
EXPOSE 3000
CMD ["node", "build/index.js"]
