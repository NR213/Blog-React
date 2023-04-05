const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Userschema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
});

const UserModel = model('User', Userschema);

const Userschemaregister = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
});

const Userregister = model('Userregister', Userschemaregister);

module.exports = UserModel;
module.exports = Userregister;

