const express = require("express");
const app = express();
const db = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const POLARDBconnection = require("./POLARDB.config.js");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const wishlistRoute = require("./routes/wishlist");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/paymentGateway");
const mailRoute = require("./routes/mail");
const e = require("express");

dotenv.config();
app.use(cors());
app.use(bodyParser());
app.use(express.json());

db.connect(process.env.MONGO_URL)
  .then(() => console.log("Db Connetion succesfull !"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET BLOGS

app.get("/blogs", (req, res) => {
  const SQL = "SELECT * FROM blog;";

  POLARDBconnection.query(SQL, (err, result) => {
    if (err) {
      res.status(400).send({ error: err, message: "Error fetching data" });
    } else {
      res.status(200).send(result);
    }
  });
});

// GET BLOG

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const SQL = `SELECT * FROM blog WHERE id = ${id};`;

  POLARDBconnection.query(SQL, (err, result) => {
    if (err) {
      res.status(400).send({ error: err, message: "Error fetching data" });
    } else {
      res.status(200).send(result);
    }
  });
});

// ADD BLOGS

app.post("/blogs", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const img_url = req.body.img_url;
  const SQL = `INSERT INTO blog (title, content, author, img_url) VALUES ('${title}', '${content}', '${author}', '${img_url}');`;

  POLARDBconnection.query(SQL, (err, result) => {
    if (err) {
      res.status(400).send({ error: err, message: "Error fetching data" });
    } else {
      res.status(200).send(result);
    }
  });
});

// DELETE BLOGS

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const SQL = `DELETE FROM blog WHERE id = ${id};`;

  POLARDBconnection.query(SQL, (err, result) => {
    if (err) {
      res.status(400).send({ error: err, message: "Error fetching data" });
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/polar", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const userType = req.body.userType;
  const pno = req.body.pno;

  console.log(email, password, name, userType, pno);

  const SQL = `INSERT INTO users 
        (email, password, username, userType, name, pno) 
        VALUES 
        ("${email}", "${password}", "${
    name + email
  }", "${userType}","${name}" ,"${pno}")`;
  POLARDBconnection.query(SQL, (error, results) => {
    if (error) throw error;
    console.log("1 record inserted");
  });
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
// app.use("/api/wishlist", wishlistRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/mail", mailRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backen server running");
});
