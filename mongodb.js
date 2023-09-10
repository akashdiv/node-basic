const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('demo_data');
    return db.collection('abc_col');
}

module.exports = dbConnect;