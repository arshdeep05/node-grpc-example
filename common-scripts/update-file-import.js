const fs = require('fs');
const path = require('path');
const generatedDir = '/app/generated-proto';
const files = fs.readdirSync(generatedDir);
console.log(files)

files.forEach(file => {
  if (file.endsWith('.d.ts') || file.endsWith('.js')) {
    const filePath = path.join(generatedDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /import \* as grpc from \"grpc\";/,
      'import * as grpc from "@grpc/grpc-js";'
    );
   
    const res = fs.writeFileSync(filePath, content, 'utf8');
    console.log(filePath)
  }
});

console.log('Post-processing complete: replaced grpc import with double quotes.');
