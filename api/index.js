
const express = require('express');
const app = express();
const pass = require('./password')
const cors = require('cors');
const User = require('./models/user');
const post = require('./models/post');
const multer = require('multer');
const fs = require('fs');
const uploadMiddleware = multer({ dest: 'uploads/' });
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const secret = 'aswedffg45erdfesdwqkh';
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
mongoose.connect('mongodb+srv://ReactBlog:Tr7WJB6fA7ahiJRF@cluster0.ewqlsev.mongodb.net/?retryWrites=true&w=majority');
app.post('/login',async (req, res) => {
    const {username, password} = req.body;
    const Docuser = await User.findOne({username});
    const passresult = bcrypt.compareSync(password, Docuser.password);
    if(passresult){
        jwt.sign({username,id:Docuser._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token',token).json({
                id:Docuser._id,
                username,
            });
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
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token','').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {originalname, path} = req.file;
    const part = originalname.split('.');
    const ext = part[part.length - 1];
    const newpath = path+'.'+ext;
    fs.renameSync(path, newpath);
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) =>{
        if (err) throw err;
       
   
   const {title, name, content} =  req.body;
    const postDoc = await post.create({
        title,
        name,
        content,
        cover: newpath,
        author:info.id,
    });
    res.json(postDoc);
});
    

});

app.get('/post', async (req, res) => {
    res.json(await post.find().populate('author', ['username']).sort({createdAt: -1}).limit(20));
});

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});

app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {id} = req.params;
    let newpath = null;
    if(req.file){
        const {originalname, path} = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        newpath = path+'.'+ext;
        fs.renameSync(path, newpath);
    }
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) =>{
        if (err) throw err;
   const {id, title, name, content} =  req.body;
   const postDoc = await post.findById(id);
   const Isauthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id)
   if(!Isauthor){
    res.status(400).json('you are not the author')
    throw 'you are not the author'
   }
   await postDoc.updateOne({title,
     name,
      content,
      cover: newpath ? newpath : postDoc.cover,
    });
    res.json(postDoc);
});
})


app.listen(4000);

