import express from 'express';
import connectDatabase from './config/db';

//initalize express application
const app = express();


//connect database
connectDatabase();
//api end points
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));