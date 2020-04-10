const express = require('express');
const app = express();

app.get("/", (req, res) => res.send({ test : "hello!"}));

const port=process.env.port || 5000;
app.listen(port);