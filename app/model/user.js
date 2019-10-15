const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: true,
    } ,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String ,
        required: true,
        unique:true
    },
    stance: {
        type: String,
        required: true
    }
})

User.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User',User);
