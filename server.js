const { application } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();


const port = process.env.PORT || 3001;



app.use(express.json());
app.use(express.static('./client/build'))

app.get("/api/test", (req, res)=> res.json({result: "ok"}));

app.get('*', (req, res)=> {
    request.setHeader('Content-Type', 'text/html');
    fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
})


app.listen(port, ()=>console.log(`Listening at localhost:${port}`));