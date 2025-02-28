echo "Running post-install script..."
mkdir -p /app/generated-proto
npx grpc_tools_node_protoc --version
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:/app/generated-proto --grpc_out=grpc_js:/app/generated-proto --ts_out=/app/generated-proto -I /app/proto /app/proto/*.proto
node /app/common-scripts/update-file-import.js
# ls .
# ls ./common-scripts -a
ls /app/generated-proto -a
# ls ./proto -a
echo "Post-install script completed."