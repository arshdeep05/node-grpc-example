FROM node:18-alpine
WORKDIR /app
COPY services/user-service/package.json  /app/
RUN npm install
# RUN npm install -g grpc_tools_node_protoc_ts
# RUN npm install -g  protoc-gen-js
COPY services/user-service/ .
COPY proto ./proto
COPY common-scripts /app/common-scripts
RUN chmod +x /app/common-scripts/post-install.sh

EXPOSE 50051
CMD ["/bin/sh", "-c", "chmod +x /app/common-scripts/post-install.sh && /app/common-scripts/post-install.sh && npm run start"]

