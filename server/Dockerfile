FROM node:18-alpine
WORKDIR /app
COPY server/package.json  /app/
RUN npm install
# RUN npm install -g grpc_tools_node_protoc_ts
# RUN npm install -g  protoc-gen-js
COPY server/ .
COPY common-scripts /app/common-scripts
COPY proto ./proto
EXPOSE 3005
CMD ["/bin/sh", "-c", "chmod +x /app/common-scripts/post-install.sh && /app/common-scripts/post-install.sh && npm run start"]




