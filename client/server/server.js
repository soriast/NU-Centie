//-------------------------------------------INNOVATORS-------------------------------------------
const {createPool} = require('mysql')

const express = require('express');
const app = express();
const cors = require('cors');
// var router = express.Router();
// var db=require('../innovators');

app.use(cors());
app.use(express.json());

app.listen(3000, ()=>{
    console.log('yayy server running on port 3000');
});

const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: 'password',
    connectionLimit: 10,
})

app.get('/grrrr', (req, res) => {
    pool.query(`SELECT  innovator_id, innovator_fname, innovator_lname, innovator_story, innovator_date, innovator_picture
    FROM centie.innovators
    WHERE innovator_like = (SELECT MAX(innovator_like) FROM centie.innovators) LIMIT 1;`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/innovdb', (req, res) => {
    pool.query(`SELECT * FROM centie.innovators`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/featuredinnov', (req, res) => {
    pool.query(`SELECT  * FROM centie.innovators WHERE innovator_isTop = false LIMIT 3;`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.put('/updateLike', (req, res) => {
   const id = req.body.id;

   console.log(req.body);
   pool.query('UPDATE centie.innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = ?', [id] ,
   (err, result) => {
        if(err) {
            return console.log(err);
        } else {
           res.send(result);
        }
   });
   
});


pool.query(`SELECT * FROM centie.innovators`, (err, res)=>{

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
FROM centie.innovators
WHERE innovator_like = (SELECT MAX(innovator_like) FROM centie.innovators) LIMIT 1;`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
        console.log(res);
    }
});

pool.query(`SELECT  * FROM centie.innovators WHERE innovator_isTop = false LIMIT 3;`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
        console.log(res);
    }
});

// pool.query('UPDATE centie.innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = 6;' ,
// (err, result) => {
//      if(err) {
//          return console.log(err);
//      } else {
//         res.send(result);
//      }
// });

//---------------------------------------------PRODUCTS-------------------------------------------

const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Admin@123",
  database: "centie",
});

app.get("/retreiveBook", (req, res) => {
  db.query("SELECT * FROM book", (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/retreiveInnovation", (req, res) => {
  db.query("SELECT * FROM innovation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/retreiveSouvenir", (req, res) => {
  db.query("SELECT * FROM souvenir", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/retreiveProduct", (req, res) => {
  db.query(
    `SELECT * FROM products WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveBookById", (req, res) => {
  db.query(
    `SELECT * FROM book WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/retrieveInnovationById", (req, res) => {
  db.query(
    `SELECT * FROM innovation WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/retrieveSouvenirById", (req, res) => {
  db.query(
    `SELECT * FROM souvenir WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/insertOrder", (req, res) => {
  const order_date = req.body.order_date;
  const order_total = req.body.order_total;
  const user_id = req.body.user_id;
  db.query(
    "INSERT INTO orders (order_date, order_total, user_id) VALUES (?,?,?)",
    [order_date, order_total, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.insertId);

        res.send(result);
      }
    }
  );
});

app.post("/insertOrderDetail", (req, res) => {
  console.log(req);
  const order_id = req.body.order_id;
  const product_id = req.body.product_id;
  const order_date = req.body.order_date;
  const payment_proof = req.body.payment_proof;
  const payment_type = req.body.payment_type;
  const order_total = req.body.order_total;
  db.query(
    "INSERT INTO order_details (order_id, product_id, order_date, payment_proof, payment_type, order_total) VALUES (?,?,?,?,?,?)",
    [
      order_id,
      product_id,
      order_date,
      payment_proof,
      payment_type,
      order_total,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/insertPayment", (req, res) => {
  const payment_type = req.body.payment_type;
  const payment_proof = req.body.payment_proof;
  const order_id = req.body.order_id;
  const user_id = req.body.user_id;
  db.query(
    "INSERT INTO invest_transaction (payment_type, payment_proof, order_id, user_id) VALUES (?,?,?,?)",
    [payment_type, payment_proof, order_id, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/insertTransaction", (req, res) => {
  const invest_amount = req.body.invest_amount;
  const invest_date = req.body.invest_date;
  const innovation_id = req.body.innovation_id;
  const investor_id = req.body.investor_id;
  const invest_reference = req.body.invest_reference;
  const invest_proofPayment = req.body.invest_proofPayment;
  db.query(
    "INSERT INTO invest_transaction (invest_amount, invest_date, innovation_id, investor_id, invest_reference, invest_proofPayment) VALUES (?,?,?,?,?,?)",
    [
      invest_amount,
      invest_date,
      innovation_id,
      investor_id,
      invest_reference,
      invest_proofPayment,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/insertCart", (req, res) => {
  const cart_id = req.body.cart_id;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  const user_id = req.body.user_id;
  db.query(
    "INSERT INTO cart (cart_id,product_id, quantity, user_id) VALUES (?,?,?,?)",
    [cart_id, product_id, quantity, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveCart", (req, res) => {
  db.query("SELECT * FROM Cart", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.put("/updateCartQuantity", (req, res) => {
  db.query(
    "UPDATE cart SET ? WHERE cart_id = ?",
    [{ quantity: req.body.params.quantity }, req.body.params.id],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log("Errpr " + err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});
app.delete("/deleteItemCart", (req, res) => {
  console.log(req);

  db.query(
    "DELETE FROM Cart WHERE cart_id=?",
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveProductById", (req, res) => {
  db.query(
    `SELECT * FROM products WHERE product_id=?`,
    [req.query.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.listen(process.env.PORT || 3003, () => {
  console.log("running on port 3003");
});
