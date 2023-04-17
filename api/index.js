
const express = require('express');
const app = express();
const pass = require('./password')
const cors = require('cors');
const User = require('./models/user');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret = 'aswedffg45erdfesdwqkh';
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
mongoose.connect('mongodb+srv://ReactBlog:Tr7WJB6fA7ahiJRF@cluster0.ewqlsev.mongodb.net/?retryWrites=true&w=majority');
app.post('/login',async (req, res) => {
    const {username, password} = req.body;
    const Docuser = await User.findOne({username});
    const passresult = bcrypt.compareSync(password, Docuser.password);
    if(passresult){
        jwt.sign({username,id:Docuser._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token',token).json('ok');
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

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) =>{
        if (err) throw err;
        res.json(info);
    })
})

app.listen(4000);

