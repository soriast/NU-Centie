const pool = require("../config/database.js");
const router = require("express").Router();

router.get("/api/getUsers", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// products
router.get("/api/getProducts", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM products", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// orders
router.get("/api/getOrders", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM order_details JOIN orders ON order_details.order_id = orders.order_id JOIN users ON orders.user_id = users.user_id", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// souvenirs
router.get("/api/getSouvenirs", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM souvenir", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// book
router.get("/api/getBook", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM book", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});



// Innovations
router.get("/api/getInnovations", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM innovation", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// Payment
router.get("/api/getPayments", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM payment", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});



// Investment
router.get("/api/getInvestment", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM invest_transaction", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// Exhibit
router.get("/api/getExhibit", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM exhibit", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


module.exports = router;
