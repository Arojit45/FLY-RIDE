const dotenv = require("dotenv");
dotenv.config();
express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./DB/db");
const userRoutes = require("./Routes/User.routes");
const captainRoutes = require("./Routes/Captain.routes");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const mapsRoutes = require("./Routes/maps.routes");
const ridesRoutes = require("./Routes/ride.router");
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", ridesRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
