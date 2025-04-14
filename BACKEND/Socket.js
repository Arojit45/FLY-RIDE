const socketIo = require("socket.io");
const UserModel = require("./Models/User.model");
const captainModel = require("./Models/captain.model");
const userModel = require("./Models/User.model");

let io;
function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "http://localhost:5173",
      methord: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`client connected:${socket.id}`);

    socket.on("join", async (data) => {
      const { userId, userType } = data;
      console.log(`User ${userId} joins as ${userType}`);
      if (userType === "user") {
        const result = await userModel.findByIdAndUpdate(userId, {
          socketID: socket.id,
        });
      } else if (userType === "captain") {
        await captainModel.findByIdAndUpdate(userId, { socketID: socket.id });
      }
    });
    socket.on("disconnect", () => {
      console.log(`client disconnected:${socket.id}`);
    });
  });
}

function sendMessageToSocketId(socketId, message) {
  if (io) {
    io.to(socketId).emit("message", message);
  } else {
    console.log("Socket.io not initialized");
  }
}
module.exports = { initializeSocket, sendMessageToSocketId };
