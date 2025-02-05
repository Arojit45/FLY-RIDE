const dotenv = require('dotenv');
dotenv.config();
express = require ('express');
const app = express();
const cors = require('cors');
const connectDB = require('./DB/db');
const userRoutes = require('./Routes/User.routes');
connectDB();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/user', userRoutes);
module.exports = app;