//module to generate absolute paths to serve static assets(js,html,css,images)
const path = require('path');

const express = require('express');
//call express function to create new app
const app = express();

//path.join takes 2 arguements: cwd, secondary dir
app.use(express.static(path.join(__dirname, 'public')));

//create routes and liste on a specific port

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello World!' });
// });
//when a person makes a GET request to your homepage, localhost:3333, the arrow function is called and will display "Hello World!"

app.get('/', (req, res) => {
     res.sendFile(`${__dirname}/public/index.html`);
 });


//setup a listener
app.listen(3333, () => {
    console.log('app listening on port 3333!');
});
//call method listen to start server
