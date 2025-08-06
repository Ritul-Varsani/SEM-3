const http=require('http')
const {url}=require('url')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.statusCode=200

if (req.url=='/about') {
    fs.readFile("about.txt",(err,data)=>{
        res.end(data)
    })
}

if (req.url=='/contact') {
    fs.readFile("contact.txt",(err,data)=>{
        res.end(data)
    })
}

if (req.url=='/image') {
    fs.readFile("image.webp",(err,data)=>{
        res.end(data)
    })
}

})

server.listen(4081,()=>{
    console.log("welcome page!!!")
})