const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();
const port = 7000;
const surveyRouter = require("./routes/survey");
const cors = require("cors");

const corsOptions = {
  origin: "http://127.0.0.1:5500",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("Hello World!"));
app.use(express.json());
app.use("/survey", surveyRouter);
app.get("/favicon.ico", (req, res) => res.status(204).end());

const start = () => {
  try {
    connectDB();
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
