const express = require('express');
const { generateHash, isValidPassword } = require('../util/hash');
const db = require('../database/db');

const router = express.Router();

//API for sign-up
router.post('/api/signup', (req, res) =>{
    const {email, password } = req.body;
    
    const hashedPassword = generateHash(password);
    const sql = `INSERT INTO users(username, name, email, password) VALUES($1, $2, $3, $4)`;

    db.query(sql, [email, hashedPassword]).then(() => {
        res.json({});
      }).catch((err) => {
        res.status(500).json({});
      });
});

//API to get post session details if user login details are correct
router.post('/api/session', (req, res) =>{
    //Get username and password from request body
    const { email, password } = req.body;

    //Create SQL statement
    const sql = `SELECT * FROM users WHERE email=$1`;

    //Get user from the database
    db.query(sql, [email]).then((dbRes) =>{
        if(dbRes.rows.length === 0) {
            return res.status(400).json({message: 'The e-mail address and/or password you specified are not correct.'})
        }

        //Pass object to user variable  
        const user = dbRes.rows[0];
        
        //Get hashedPassword from user object
        const hashedPassword = user.password;

        //Check if password is valid
        if(isValidPassword(password,hashedPassword)){
            // update session variables with email and name
            req.session.email = user.email;
            req.session.users_id = user.users_id;
            
            return res.json({});
        }
        return res.status(400).json({message:'The e-mail address and/or password you specified are not correct.' }).catch((err)=>{
            res.status(500).json({});
        })
    })
});

//API to get the session details and return object
router.get('/api/session', (req, res) => {
    const id = req.session.users_id;
    const email = req.session.email;
   
    if (!email) {
      return res.status(401).json({ message: 'Not loggin in' });
    } else {
      return res.json({ users_id: id, email: email });
    }
  });

//API to delete the session  
router.delete('/', (req, res) => {
  const userExists = req.session.email;
  if (userExists){
    req.session.destroy()
    return res.json({});  
  } else {
    return res.status(400).json({message: 'No users are logged in'});
  }  
});

module.exports = router;