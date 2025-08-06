const http=require('http');
const fs=require('fs');
const { url } = require('inspector');

const server=http.createServer((req,res)=>{
res.statusCode=200

if (req.url=="/home") {
    fs.readFile('home.html',(error,data)=>{
        res.end(data);
    })
}
else if (req.url=="/about") {
    fs.readFile('about.html',(error,data)=>{
        res.end(data);
    })
}
else if (req.url=="/contact") {
    fs.readFile('contact.html',(error,data)=>{
        res.end(data);
    })
}
else if (req.url=="/login") {
    fs.readFile('login.html',(error,data)=>{
        res.end(data);
    })
}
else if (req.url=="/profile") {
    fs.readFile('profile.html',(error,data)=>{
        res.end(data);
    })
}
else{
    res.end("welcome my page!!!!")
}

})



server.listen(4081,()=>{
    console.log("server installed")
})