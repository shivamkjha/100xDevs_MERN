const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const port = 3002


app.get('/files',(req,res)=>{
    const filePath = path.join(__dirname,'/files/')

    fs.readdir(filePath,(err,files) =>{
        if(err){
            return res.status(500).json({error : 'Failed to read the file'});
        }
        res.json(files)
    });
})

// files/:filename -> It means anything after files should make a call 
app.get('/files/:filename',(req,res)=>{
    const filePath = path.join(__dirname,'/files/',req.params.filename);

    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            return res.status(404).send('files not found, please retry');
        }
        res.send(data);
    });
})


app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})
