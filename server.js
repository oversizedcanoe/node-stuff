import { createServer, } from 'node:http';

const server = createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, World!</h1>');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

server.addListener("connection", () => {
    console.log("new connection");
})