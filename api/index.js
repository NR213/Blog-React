const express = require('express');
const app = express();

app.get('/test',(req, res) => {
    res.json('ok2');
});

app.listen(4000);