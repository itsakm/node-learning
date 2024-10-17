import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    {id:1,name:'John'},
    {id:2,name:'John Doe'},
    {id:3,name:'Jihn'},
];

const server = createServer((req,res) => {
    if(req.method === 'GET' && req.url === '/api/users')
    {
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    }

});

server.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
});