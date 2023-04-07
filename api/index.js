
const express = require('express');
const app = express();
const pass = require('./password')
const cors = require('cors');
const User = require('./models/user');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret = 'aswedffg45erdfesdwqkh';
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://ReactBlog:o9zGyUcO77otx8AC@cluster0.ewqlsev.mongodb.net/?retryWrites=true&w=majority');
app.post('/login',async (req, res) => {
    const {username, password} = req.body;
    const Docuser = await User.findOne({username});
    const passresult = bcrypt.compareSync(password, Docuser.password);
    if(passresult){
        jwt.sign({username,id:Docuser._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.json(token);
        });
    
    }else{
        res.status(400).json('Wrong credentials');
    }
});

app.post('/register',async (req, res) => {
    const {username, password, email} = req.body;
   try{
     const Docreg = await User.create({username, password:bcrypt.hashSync(password, salt), email});
    res.json(Docreg);
   }catch(e){
        console.log(e);
        res.status(400).json(e);
   }
});

app.listen(4000);

