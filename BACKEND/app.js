const dotenv = require('dotenv');
dotenv.config();
express = require ('express');
const app = express();
const cors = require('cors');
const connectDB = require('./DB/db');
connectDB();

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
module.exports = app;