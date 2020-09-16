const express = require('express');//express

const app = express(); //app on express


//USE CORS as `npm i cors`
const cors = require('cors');
app.use(cors());

//json-body-parser form Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//

const mongoose = require('mongoose'); //bring mongoose

require('dotenv/config');//dotenv to hide your request url with user and password
//see .env file fro db configurations


/*

//MIDDLEWARE EXAMPLE
//function that executes when routes are being hit
// app.use('/posts', () => {
//     console.log('This is a middleware running')
// });



*/

//ROUTE METHOD 1 TYPE A : You can define routes in specific files and call as
//IMPORT ROUTES from 
const postsRoute = require('./routes/routes.posts');

//MIDDLEWARE, this is a function which executes when you call the postRoute
app.use('/posts', postsRoute);

//OPTIONAL ROUTE HANDLING:
//ROUTES METHOD 1 TYPE B : or you can call route here directly but follow type A
app.get('/', (req, res) => {
    res.send('This is home')
});



//DB CONNECT
mongoose.connect(
    //dotEnc to get the DB Connection Definations
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true }, () => {
        console.log('Connected to DB')
    });



//LISTEN
app.listen(3000);













/*for Cors check at codepen.io*/
/*

fetch('http://localhost:3000/posts').then(result => {
  return result.json();
}).then(
data => {
  console.log(data);
})

*/