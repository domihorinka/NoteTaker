  
var router =require("express").Router();
const { error } = require("console");
var fs = require("fs");

const { v4: uuidv4 } = require('uuid');


router.get("/notes", function(req, res){
    fs.readFile("./db/db.json", "utf8", function(err,data){
        if(err)throw err
        console.log(data)
        res.json(JSON.parse(data))
    })
})

router.post("/notes", function(req, res){
    fs.readFile("./db/db.json", "utf8", function(err,data){
        if(err)throw err
        var notes = JSON.parse(data)
        console.log(notes)
        var newNote = req.body
        newNote.id = uuidv4()
        console.log(newNote)
        notes.push(newNote)
        fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
            if(err)throw err
            console.log("file written")
            res.json({ok: true})
        })
    })
})



module.exports = router;