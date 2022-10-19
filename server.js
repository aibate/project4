const { application } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const db = require('./database/db');
const { expressSession, pgSession } = require('./session');
const usersController = require('./controller/users');
const portfoliosController = require('./controller/portfolios')

cors = require("cors");

const app = express();

const port = process.env.PORT || 3001;



app.use(express.json());
app.use(express.static('./client/build'))
app.use(cors());
app.use(
    expressSession({
      store: new pgSession({
        pool: db, // Connects to our postgres db
        createTableIfMissing: true, // Creates a session table in your database (go look at it!)
      }),
      secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    })
 );
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("/api/test", (req, res)=> res.json({result: "Ai You did it!"}));

app.get('*', (req, res)=> {
    res.setHeader('content-type', 'text/html');
    fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
})

app.use('/', usersController);
app.use('/', portfoliosController);

app.listen(port, ()=>console.log(`Listening at localhost:${port}`));