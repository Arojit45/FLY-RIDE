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

    socket.on("update-location-captain", async (data) => {
      const { userId, location } = data;

      if (!location || !location.lat || !location.lon) {
        return socket.emit("error", { message: "Invalid location" });
      }

      try {
        const updatedCaptain = await captainModel.findByIdAndUpdate(
          userId,
          {
            location: {
              lat: location.lat,
              lon: location.lon,
            },
          },
          { new: true }
        );

        if (!updatedCaptain) {
          return socket.emit("error", { message: "Captain not found" });
        }
      } catch (error) {
        console.error(
          `Error updating location for captain ${userId}:`,
          error.message
        );
        socket.emit("error", { message: "Failed to update location" });
      }
    });


    socket.on("disconnect", () => {
      console.log(`client disconnected:${socket.id}`);
    });
  });
}

function sendMessageToSocketId(socketId, messageObject) {
  if (io) {
    io.to(socketId).emit(messageObject.events, messageObject.data);
  } else {
    console.log("Socket.io not initialized");
  }
}
module.exports = { initializeSocket, sendMessageToSocketId };
