const mongoose = require('mongoose');
const UserModel = require('../app/model/user');
const bcrypt = require('bcryptjs');
const userData = {username:'Firdaus Helmy',email:'firdausdaus98@ymail.com',password:'12345678910',stance:'Regular'};

describe('User model test', ()=>{
    //connect to mongodb memory server
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();
        const password = await bcrypt.compare(userData.password, savedUser.password);
        expect(savedUser._id).toBeDefined();
        expect(savedUser.username).toBe(userData.username);
        expect(savedUser.email).toBe(userData.email);
        expect(password).toBe(true);
        expect(savedUser.stance).toBe(userData.stance);
    });

    // it('go through pre-hook on mongoose',async()=>{
    //     const validUser = new UserModel(userData);
    //     const savedUser = await validUser.save();
    //     const getUser = await UserModel.find(savedUser._id);
    //     expect(getUser.username).toBe('Firdaus Helmy');
    // });


});