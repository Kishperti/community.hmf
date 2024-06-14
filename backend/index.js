const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb://localhost:27017/myapp";

app.use(
  session({
    secret: "this_is_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const User = mongoose.model("User", {
  name: String,
  email: String,
  phone: Number,
  password: String,
  transactionId: String,
});

app.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const user = new User({ name, email, phone, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      res.status(401).json({ error: "Invalid credentials" });
    } else {
      req.session.user = email;
      res.status(200).json({ message: "Login successful" });
      // res.redirect("/payment");
    }
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/store", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  console.log(req.session.user);
  if (req.session.user) {
    try {
      const user = await User.findOneAndUpdate(
        { email: req.session.user },
        { transactionId: id },
        { new: true }
      );
      if (user) {
        res.send(`Transaction ID updated: ${user.transactionId}`);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send("Error updating transaction ID");
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.send("Logged out successfully");
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
