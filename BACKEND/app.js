const dotenv = require('dotenv');
dotenv.config();
express = require ('express');
const app = express();
const cors = require('cors');
const connectDB = require('./DB/db');
const userRoutes = require('./Routes/User.routes');
const port = process.env.PORT || 3000;
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extented: true}));


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/users', userRoutes);

module.exports = app;