import express from 'express';
import mongoose from 'mongoose';
import route from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true }))
app.use(cors());
app.use('/users', route);


const PORT = 8000;
const URL = 'mongodb+srv://Yugandhara:12345@crud.fbpvj.mongodb.net/PROJECT0?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewURLParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on Port ${PORT}`)
    });
}).catch(error => {
    console.log('Error: ', error.message);
});
