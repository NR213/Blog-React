const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Userschemaregister = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
});

const Userregister = model('Userregister', Userschemaregister);

module.exports = Userregister;

