FROM node:22 AS build
WORKDIR /opt/react-router
COPY . .
RUN npm i --silent && npm run build; \
    npm cache clean --force; \
    rm -rf node_modules

FROM node:22
WORKDIR /opt/react-router
COPY --from=build /opt/react-router/build /opt/react-router/build
COPY --from=build /opt/react-router/*.json /opt/react-router/
COPY --from=build /opt/react-router/*.ts /opt/react-router/
EXPOSE 3000
CMD ["sh", "-c", "npm i --silent --omit=dev && npm start"]
