const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.post('/login',(req, res) => {
    res.json('ok2');
});

app.post('/register',(req, res) => {
    res.json('ok2');
});

app.listen(4000);