const express = require("express");
const cors = require("cors");
const healthRoute = require("./routes/health"); // 👈 import the route

const app = express();

app.use(cors());
app.use(express.json());

// 👇 connect route here
app.use("/health", healthRoute);

module.exports = app;
