const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/user');
const Userregister = require('./models/user')
const { default: mongoose } = require('mongoose');
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://ReactBlog:o9zGyUcO77otx8AC@cluster0.ewqlsev.mongodb.net/?retryWrites=true&w=majority');

app.post('/login',async (req, res) => {
    const {username, password} = req.body;
    const Doc = await User.create({username, password});
    res.json(Doc);
});

app.post('/register',async (req, res) => {
    const {username, password, email} = req.body;
   try{
     const Docreg = await User.create({username, password, email});
    res.json(Docreg);
   }catch(e){
        res.status(400).json(e);
   }
});

app.listen(4000);

