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

router.get('/api/contact/:id', (req, res)=>{
  const portfolio_id = req.params.id;
  console.log(portfolio_id)
  const sql = `SELECT * FROM contacts WHERE portfolio_id = $1`;
  db.query(sql, [ portfolio_id]).then((dbRes)=>{
    res.json(dbRes.rows);
  }).catch((error)=>{
    res.sendStatus(500)
  })

})


















module.exports = router;