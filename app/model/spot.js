const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const Spot = new Schema({
    spotsName:{
        type:String,
        required:true
    },
    location:{
        type:{
            type:String
        },
        coordinates: {
            type:Array
        }
    },
    description:{
        type:String
    },
    spotType:{
        type:String
    },
    spotImage:{
        type:Array
    }
})

module.exports = mongoose.model('Spot',Spot);