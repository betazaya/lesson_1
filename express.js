const express = require("express");
const app = express();
const portmort = 4000;
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser());

const config = {
  host: "54.169.69.87",
  user: "rtd",
  password: "Tiny722$",
  database: "ulun_mn",
};

app.post("/signin", async (req, res) => {
  const connection = mysql.createConnection(config);
  connection.connect();
  console.log(req.body.username);
  connection.query(
    "SELECT * from Users where username='" + req.body.username + "'",
    (err, rows, fields) => {
      if (err) throw err;
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.status(500).json({ error: "User Not Found." });
      }
    }
  );
  connection.end();
});

app.listen(portmort, () => {
  console.log(`bi ${portmort} dgr portiig sonsjiinoo`);
});
