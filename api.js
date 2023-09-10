const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json())

app.get('/', async (req, resp) => {
    let getData = await dbConnect();
    let data = await getData.find().toArray();
    resp.send(data)
})

app.post('/', async (req, resp) => {
    let sendData = await dbConnect();
    let data = await sendData.insertOne(req.body);
    resp.send(data);
})

app.put('/:name',async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne({name:req.params.name},{
        $set: req.body
    });
    resp.send(req.body)
})

app.listen(5000)