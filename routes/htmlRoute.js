//Installations
const router = require('express').Router();
const path = require('path');

// Make get request for index.html
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
)


//make get request for notes.html
router.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname,'../public/notes.html'))
)


module.exports = router;