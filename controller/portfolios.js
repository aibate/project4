const db = require('../database/db.js')
const express = require('express');
const router = express.Router();


router.post('/api/portfolio', (req, res) =>{
  console.log(req.body)
  const { 
    fullname, 
    job_title, 
    picture, 
    description
   } =req.body;
  const sql = `INSERT INTO portfolios (fullname, picture, job_title, description) VALUES($1, $2, $3, $4)`;

  db.query(sql, [ fullname, picture, job_title , description ]).then(() => {
      console.log(res.json)
      res.json({});
    }).catch((err) => {
      res.status(500).json({});
    });
});

//API for getting All portfolios information
router.get('/api/portfolio', (req, res) =>{
  
  const sql = "SELECT * FROM portfolios";
  db.query(sql).then((dbRes)=>{
    // console.log(res.json(dbRes.rows))
    res.json(dbRes.rows);
  });
  
});

//API for future gift 
router.get('/api/futureGiftsList', (req, res) =>{
  const userId = req.session.users_id;
  let date_ob = new Date();
  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // prints date in YYYY-MM-DD format
  const today = year + "-" + month + "-" + date;

  const sql = `
      SELECT *, c.users_id as gift_receiver_id, c.name as gift_receiver_name
      FROM gifts as a
      inner join relationship as b on a.relationship_id = b.relationship_id
      inner join users as c on b.gift_receiver = c.users_id
      inner join users as d on b.gift_giver = d.users_id
      inner join presents as e on a.present_id = e.present_id
      inner join relation as f on b.relation_id = f.relation_id
      WHERE b.gift_giver = $1
      and a.gift_date > $2
    `;
  db.query(sql,[userId, today]).then((dbRes)=>{
    res.json(dbRes.rows);
  });
});

// API for change status PENDING => GIVEN
router.put('/api/giftsStatus/:id', (req, res) =>{
  const id = req.params.id;
  const sql = `UPDATE gifts SET gift_status = 'GIVEN' WHERE gift_id=$1`
  db.query(sql, [id]).then((dbRes)=>{
    res.sendStatus(200);
  }).catch((err)=>{
    res.sendStatus(500);
  });
});

// API for update gift and present
router.put('/api/gifts/:id', (req, res) =>{
  const id = req.params.id;
  const { gift_id, relationship_id, event_id, present_id,  gift_date, gift_status, present_name, present_description, cost,  link} = req.body
  if( gift_date === '' || present_name ==='' || present_description === '' || cost === '',link === ''){
    return res.status(400).json({message:'Please fill in the entire form.' })
  }
  // update gift table
  const sqlGift = `UPDATE gifts SET gift_date=$1 WHERE gift_id=$2`;
  const sqlPresent = 'UPDATE presents SET present_name=$1, present_description = $2, cost = $3, link =$4  WHERE present_id=$5'
  db.query(sqlGift, [gift_date, gift_id]).then(dbRes=>{
    db.query(sqlPresent, [present_name, present_description, cost, link,  present_id])
    .then(dbRes =>{
      res.sendStatus(200);
    }).catch(err =>{
      res.sendStatus(500)
    })
  });
});
// API for delete gift
router.delete('/api/gifts/:id', (req, res) => {
  const id = req.params.id;
  console.log( 'Deleting gift_id ='+id)
  const query = "SELECT * FROM gifts WHERE gift_id = $1";
  db.query(query, [id]).then((dbRes)=>{
    if(dbRes.rows.length !== 1){
      return res.status(404).json({message: 'Gift not found!'})
    }
    const sql = `DELETE FROM gifts WHERE gift_id = $1`;
    db.query(sql, [id]).then((dbRes)=>{
      res.json({});
    })
    .catch((err)=>{
      res.status(500).json({});
    });
  });
});
// API for delete present
router.delete('/api/presents/:id', (req, res) => {
  const presentId = req.params.id;
  console.log('Deleting present id:'+ presentId)
  const queryPresent = "SELECT * FROM presents WHERE present_id = $1";
  db.query(queryPresent, [presentId]).then((dbRes)=>{
    if(dbRes.rows.length !== 1){
      return res.status(404).json({message: 'Preset not found!'})
    }
    const sqlPresent = `DELETE FROM presents WHERE present_id = $1`;
    db.query(sqlPresent,[presentId]).then((dbRes)=>{
      res.json({});
    })
  }).catch(err =>{
    res.status(500).json({});
  });
});

// API to get given gift
router.get('/api/givenGift', (req, res) =>{
  const users_id = req.session.users_id;
  const sql = `
      SELECT *, c.users_id as gift_receiver_id, c.name as gift_receiver_name
      FROM gifts as a
      inner join relationship as b on a.relationship_id = b.relationship_id
      inner join users as c on b.gift_receiver = c.users_id
      inner join users as d on b.gift_giver = d.users_id
      inner join presents as e on a.present_id = e.present_id
      inner join relation as f on b.relation_id = f.relation_id
      inner join events as g on a.event_id = g.event_id
      WHERE b.gift_giver = $1
      and a.gift_status = 'GIVEN'
      ORDER BY a.gift_date DESC `;
  db.query(sql, [users_id]).then(dbRes =>{
    return res.json(dbRes.rows);
  })
})
// API to get Pending gift
router.get('/api/pendingGift', (req, res) =>{
  const users_id = req.session.users_id;
  const sql = `
      SELECT *, c.users_id as gift_receiver_id, c.name as gift_receiver_name
      FROM gifts as a
      inner join relationship as b on a.relationship_id = b.relationship_id
      inner join users as c on b.gift_receiver = c.users_id
      inner join users as d on b.gift_giver = d.users_id
      inner join presents as e on a.present_id = e.present_id
      inner join relation as f on b.relation_id = f.relation_id
      inner join events as g on a.event_id = g.event_id
      WHERE b.gift_giver = $1
      and a.gift_status = 'PENDING'
      ORDER BY a.gift_date DESC `;
  db.query(sql, [users_id]).then(dbRes =>{
    return res.send(dbRes.rows);
  })
})
//API to get all events from the events table
router.get('/api/events', (req, res) => {
  const sql = `SELECT * FROM events`;
  db.query(sql).then((dbRes)=> {
    return res.json(dbRes.rows);
  });
});

//API to get all gifts given to a gift receiver
router.get('/api/mygifts', (req,res) => {
  const users_id = req.session.users_id;

  const sql = `SELECT * FROM gifts
              INNER JOIN relationship ON gifts.relationship_id = relationship.relationship_id
              INNER JOIN presents ON gifts.present_id = presents.present_id
              INNER JOIN users ON relationship.gift_giver = users.users_id
              INNER JOIN events ON gifts.event_id = events.event_id
              INNER JOIN relation ON relationship.relation_id = relation.relation_id
              WHERE relationship.gift_receiver = $1 
              AND gifts.gift_status = 'GIVEN'`;
        
  db.query(sql, [users_id]).then((dbRes)=> {
    return res.json(dbRes.rows);
  });
});

//API to post gift to the database
router.post('/api/gift', (req,res) => {
  const { relationship_id, event_id, present_name, present_description, cost, link } = req.body;
  
  if (present_name === '' || present_description === '' || cost === '' || link === ''){
    return res.status(400).json({ message: 'Please fill in the entire form.' });
  }

  const sql_presents = `
      INSERT INTO presents (present_name, present_description, cost, link)
      VALUES ($1, $2, $3, $4)
      `;
  const sql_gifts = `
      INSERT INTO gifts (relationship_id, event_id, present_id, gift_date, gift_status)
      VALUES ($1, $2, $3, $4, $5)
      `;

   //updating the presents table
  db.query(sql_presents, [present_name, present_description, cost, link]).then((dbRes) => {
        
    const sql = `SELECT present_id FROM presents ORDER BY present_id DESC`;
    
    db.query(sql).then((dbRes)=>{
        const present_id = dbRes.rows[0].present_id;

        //Replace once Ai had created this as a function

        let date_ob = new Date();
        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // prints date in YYYY-MM-DD format
        const gift_date = year + "-" + month + "-" + date;
  
        db.query(sql_gifts, [relationship_id, event_id, present_id, gift_date, 'PENDING' ]).then((dbRes) => {
          res.sendStatus(200); //everything is okay 
        }); 
      });
     
  }).catch((err) => {
    res.status(500).json({}); //everything is not okay 500 - Internal Server Error - sends message to user
  });   

});

//updating the rating table
router.post('/api/rating', (req,res) => {
  const { gift_id, rating } = req.body;
  
  const sql = `
      INSERT INTO rating (gift_id, rating)
      VALUES ($1, $2)
      `;
  const sql_update = `UPDATE gifts SET gift_status = 'RATED' WHERE gift_id=$1`;

      db.query(sql, [gift_id, rating]).then((dbRes) => {
          //update rating status
          db.query(sql_update, [gift_id]).then((dbRes) =>{
            res.sendStatus(200); //everything is okay 
          }).catch((err) => {
            res.status(500).json({}); //everything is not okay 500 - Internal Server Error - sends message to user
          });

      }).catch((err) => {
        res.status(500).json({}); //everything is not okay 500 - Internal Server Error - sends message to user
      });        
});

router.get('/api/rating/:id', (req, res) => {
  const gift_receiver = req.params.id;
    
  sql = `
    SELECT * FROM relationship
    INNER JOIN gifts ON relationship.relationship_id = gifts.relationship_id
    INNER JOIN rating ON gifts.gift_id = rating.gift_id 
    WHERE relationship.gift_receiver = $1
    AND gifts.gift_status = 'RATED';
  `;
  db.query(sql, [gift_receiver]).then((dbRes)=> {
      return res.json(dbRes.rows);
  });

});

module.exports = router;




