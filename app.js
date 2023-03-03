const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan("combined"))
const port = 3000;
app.get('/', (req, res) => res.send("hello world!"));
app.listen(port,()=>console.log("example listening"))