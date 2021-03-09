const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

console.log(process.env.ATLAS_URI);

const middlewares = require('./middleware');
const logs = require('./api/logs');


mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


// Connection problem mongoose error fix tomorrow

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "hello world",
    });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHanlder);


const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})