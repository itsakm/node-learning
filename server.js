 import http from 'http';
 import fs from 'fs/promises';
 import url from 'url';
 import path from 'path';
 const port = process.env.PORT;

 //get current path
 const __filename = url.fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);


 const server = http.createServer(async (req,res) => {
    //res.write('Hello');
   //  res.setHeader('Content-Type', 'text/html');
   //  res.statusCode = 404;
   //  res.end('<h1>Hello Wor</h1>');

   //Simple Routing

   try{
      if(req.method === 'GET')
      {
         let filePath;
         if(req.url === '/')
            {
               filePath = path.join(__dirname,'public','index.html');
            
               // res.writeHead(200,{'content-Type':'text/html'});
               // res.end('<h1>HomePage</h1>')
            }
            else if(req.url === '/about')
            {
               filePath = path.join(__dirname,'public','about.html');
               // res.writeHead(200,{'content-Type':'text/html'});
               // res.end('<h1>About</h1>')
            }
            else 
            {
               throw new Error('Not found');
               // res.writeHead(404,{'content-Type':'text/html'});
               // res.end('<h1>Not Found</h1>')
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();

      }else {
         throw new Error('Method not allowed');
      }
   }catch(err)
   {
      res.writeHead(500,{'content-Type':'text/plain'});
      res.end('<h1>Not Found</h1>')

   }
   
 });


 server.listen(port, () => {
    console.log(`Server is running on ${port}`);
 })