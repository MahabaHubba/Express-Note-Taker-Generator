// Installations
const express = require('express');
const apiRoute = require('./routes/apiRoute')
const htmlRoute = require('./routes/htmlRoute')

//Set middleware
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/', htmlRoute);
app.use('/', apiRoute);

//Ending the port
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);