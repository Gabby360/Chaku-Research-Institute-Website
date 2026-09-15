const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const base64Data = body.replace(/^data:image\/png;base64,/, '');
      const filePath = path.join(__dirname, '../public/images/chaku-leaf-mark.png');
      fs.writeFileSync(filePath, base64Data, 'base64');
      console.log('Successfully saved chaku-leaf-mark.png to:', filePath);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
      setTimeout(() => process.exit(0), 500);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(9876, () => {
  console.log('Leaf saver server running on port 9876');
});
