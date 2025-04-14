const socketIo = require('socket.io')
const UserModel = require('./Models/User.model')
const captainModel = require('./Models/captain.model')

let io;
function initializeSocket(server){
    io = socketIo(server,{
        cors:{
            origin:'',
            methord:['GET','POST']  
        }
    })
    io.on('connection',(socket)=>{
        console.log(`client connected:${socket.id}`)
        socket.on('disconnect',()=>{
            console.log(`client disconnected:${socket.id}`)
        })
    })
}

function sendMessageToSocketId(socketId,message){
    if(io){
        io.to(socketId).emit('message',message)
    }else{
        console.log('Socket.io not initialized')
    }
}
module.exports= {initializeSocket,sendMessageToSocketId}