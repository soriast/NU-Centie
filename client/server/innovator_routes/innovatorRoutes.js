const pool = require('../config/database.js');
const router = require("express").Router();


router.get('/grrrr', (req, res) => {
    pool.query(`SELECT  innovator_id, innovator_fname, innovator_lname, innovator_story, innovator_date, innovator_picture
    FROM innovators
    WHERE innovator_like = (SELECT MAX(innovator_like) FROM innovators) LIMIT 1;`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


router.get('/innovdb', (req, res) => {
    pool.query(`SELECT * FROM innovators`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


router.get('/featuredinnov', (req, res) => {
    pool.query(`SELECT  * FROM innovators WHERE innovator_isTop = false LIMIT 3;`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


router.put('/updateLike', (req, res) => {
   const id = req.body.id;

   console.log(req.body);
   pool.query('UPDATE innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = ?', [id] ,
   (err, result) => {
        if(err) {
            return console.log(err);
        } else {
           res.send(result);
        }
   });
   
});


pool.query(`SELECT * FROM innovators`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
         res.forEach( (res) => {
            console.log(`${res.innovator_lname} title is  ${res.innovator_title}`);
          });
    }
});

pool.query(`SELECT  innovator_id, innovator_fname, innovator_lname, innovator_story, innovator_date, innovator_picture
FROM innovators
WHERE innovator_like = (SELECT MAX(innovator_like) FROM innovators) LIMIT 1;`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
        console.log(res);
    }
});

pool.query(`SELECT  * FROM innovators WHERE innovator_isTop = false LIMIT 3;`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
        console.log(res);
    }
});

// pool.query('UPDATE innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = 6;' ,
// (err, result) => {
//      if(err) {
//          return console.log(err);
//      } else {
//         res.send(result);
//      }
// });


module.exports = router;