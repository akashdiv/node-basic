// import code

// const app = require('./app')

// let x = 10;
// let y = 20;

// console.log(app.x)

// console.log('this is my node test')

// // // // // http request

// const http = require('http');
// const data = require('./app')

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end()
// }).listen(3200)

// // // // // how to get data from parameter

// console.log(process.argv);

// const fs = require('fs');

// if(process.argv[2] == 'add'){
//     fs.writeFileSync(process.argv[3], process.argv[4])
// }else if(process.argv[2] == 'remove'){
//     fs.unlinkSync(process.argv[3])
// }

// // // // how to create file and folder

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// for(i=0; i < 5; i++){
//     fs.writeFileSync(dirPath + `/hello${i}.txt`, 'hey my name is Akash')
// }


// // // // // Asynchronous Programming

// let a = 10;
// let b = 0;

// let waitData = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve(20)
//     }, 3000);
// })

// waitData.then((data)=>{
//     b = data;
//     console.log(a+b);
// })


// // // // how load pages
// const path = require('path');
// const express = require('express');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// //app.use(express.static(publicPath))

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// });

// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// });

// app.get('**', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// });

// app.listen(5000);


// // // // template engine - dynamic routing and page

// const path = require('path');
// const express = require('express');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.set('view engine', 'ejs');

// app.get('/profile', (req, res) => {
//     res.render('profile')
// });

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// });

// app.get('/about', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// });

// app.get('**', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// });

// app.listen(5000);


// // // // mongodb connect

const dbConnect = require('./mongodb')

// dbConnect().then(resp => {
//     resp.find().toArray().then(data => {
//         console.log(data)
//     })
// })

const getData = async () => {
   let data = await dbConnect();
   let allData = await data.find().toArray()
   console.log(allData)
}

getData()