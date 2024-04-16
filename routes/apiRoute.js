//Installations
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//Get api/notes should read db.json
router.get('/api/notes', (req, res) => {
    try{
        console.log('start');
        const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
        res.send(data);
        console.log('end');

    } catch(err){
        console.log("here is the error");
        console.log(err);
        res.status(500).json({ message: 'Error'});
    }
})

//Post /api/notes db.json return new notes for clients with unique id.
router.post('/api/notes', (req, res) => {
    try{
        const newData = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
        // console.log(newData); // recieved the informnation from db.json
        const body = req.body;
        // console.log(body);
        // need to push body and assign new id
        body.id = uuidv4();
        newData.push(body);
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));
        res.status(200).json({message: 'completed'})
    } catch (err) {
        res.status(500).json({message: 'Error in post request'})
    }
})

//Delete seuqence
router.delete('/api/notes/:id', (req, res) => {
    try{
        const dataId = req.params.id; // retrieve existing ids
        // console.log(dataId) - log to see what im retrieving
        let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8')) // reads the JSon file data
        data = data.filter(data => data.id !== dataId); // removes any id that doesnt match
        fs.writeFileSync('./db/db.json', JSON.stringify(data));// formats it in a json file form the above line
        res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Deletion went wrong' });
    }
})
//module exports
module.exports = router;
