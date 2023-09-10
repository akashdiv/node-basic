const dbConnect = require('./mongodb');

const insert = async () => {
    let data = await dbConnect();
    let insertData =  data.insertOne(
        {name: "Iphone", company: "vivo", price: 400}
        )
        console.log(insertData)
}

insert();