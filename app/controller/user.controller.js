const User = require('../model/user')

module.exports = {
    users: async (req,res,next) => {
        // const error = new Error('missing id')
        // error.httpStatusCode = 400
        // return next(error)
        const users = await User.find();
        res.status(200);        
        return res.json(users);

    },

    user: async (req,res,next) => {
        const user = await User.findById("5d98071329f0584f681496d7");
        return res.json(user);
        // return next(error)
    },

    createUser: async (req,res,next) => {
        console.log(req.body);
        return res.json('test');
        // if(await User.findOne({email:req}))
    },

    updateUser: async(req,res,next) => {

    },

    deleteUser: async(req,res,next) =>{

    },

    deactivateUser: async(req,res,next) => {

    }

}
