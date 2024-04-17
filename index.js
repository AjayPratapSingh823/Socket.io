const express= require('express');
const {createServer }=  require('http')

const {Server}=require('socket.io')
const{join}=require('node:path')

const app = express();
const server=createServer(app)
const io= new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));
})



io.on('connection',(socket)=>{
    console.log('User Connected Successfully');
  
  //receiving data from the client
  socket.on('chat message',(msg)=>{
    io.emit('chat message',msg);
  })
    
})




server.listen(3000,()=>{
    console.log('server is running at 3000 port')
})

