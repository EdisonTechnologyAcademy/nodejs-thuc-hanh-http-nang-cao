import http from 'http';
import fs from 'fs';

const server = http.createServer(((req, res) => {
  const url = req.url;
  let templateFile = './templates/home.html';
  if(url == '/student') {
    templateFile = './templates/student.html';
  } else if (url == '/admin') {
    templateFile = './templates/admin.html';
  }
    fs.readFile(templateFile, 'utf8', function (err, str) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(str);
      return res.end();
    });
}));

server.listen('8080', function () {
  console.log(`Server running in http://localhost:8080`)
});