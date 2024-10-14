 import http from 'http';
 const port = 8000;

 const server = http.createServer((req,res) => {
    //res.write('Hello');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end('<h1>Hello World</h1>');
 });


 server.listen(port, () => {
    console.log(`Server is running on ${port}`);
 })