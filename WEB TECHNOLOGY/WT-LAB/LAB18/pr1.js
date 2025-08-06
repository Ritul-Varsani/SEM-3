const http=require('http');

const server=http.createServer((requestAnimationFrame,res)=>{
res.statusCode=200
res.end("HI")
})

server.listen(4081,()=>{
    console.log("server installed")
})