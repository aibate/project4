const db = require('../database/db.js')
const express = require('express');
const router = express.Router();


router.post('/api/contact', (req, res) =>{
    console.log(req.body)
    const { 
      portfolio_id, 
      client_name, 
      email, 
      enquiry
     } =req.body;
    const sql = `INSERT INTO contacts (portfolio_id, client_name, email, enquiry) VALUES($1, $2, $3, $4)`;
  
    db.query(sql, [ portfolio_id,client_name,email,enquiry]).then(() => {
        console.log(res.json)
        res.json({});
      }).catch((err) => {
        res.status(500).json({});
      });
});



















module.exports = router;