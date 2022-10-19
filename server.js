const { application } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const db = require('./database/db');
const { expressSession, pgSession } = require('./session');
const usersController = require('./controller/users');
const portfoliosController = require('./controller/portfolios')

const app = express();

const port = process.env.PORT || 3001;



app.use(express.json());
app.use(express.static('./client/build'))

app.use(
    expressSession({
      store: new pgSession({
        pool: db, // Connects to our postgres db
        createTableIfMissing: true, // Creates a session table in your database (go look at it!)
      }),
      secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    })
 );

app.get("/api/test", (req, res)=> res.json({result: "Ai You did it!"}));

app.get('*', (req, res)=> {
    request.setHeader('Content-Type', 'text/html');
    console.log('HELLLLLO!',req, res)
    fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
})

app.use('/', usersController);
app.use('/', portfoliosController);

app.listen(port, ()=>console.log(`Listening at localhost:${port}`));