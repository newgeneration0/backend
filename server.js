const http = require ('http')


const server = http.createServer((req, res)=>{

    console.log(req.method)

    console.log(req.headers);

    console.log(req.url)


    if(req.url === '/users' && req.method === 'POST'){
        res.writeHead(400, {
            'content-Type' :'text/plain'
        })

        res.end('hello from the user' )
    } else{
        res.end('hello from server')
    }
   
})

server.listen(3000, ()=>{
    console.log('server is running')
})

server.on('request', (req)=>{
    console.log(`req is made on ${req.url} and the method is ${req.method}`)
})

server.on('connection', ()=>{
    console.log('connection is made')
})