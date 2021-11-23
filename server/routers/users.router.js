
const accountSid = 'AC1292a8692b63da12012b230ca2d129d6';
const authToken = '65aa90f9b2f3afa2451d2a1d14c13448';

const express = require("express");
const usersModel = require("../models/users");
const authModel = require("../models/authentication");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require('twilio')(accountSid, authToken);

const router = express.Router();

router.post('/signup', function(req, res,next) {
    try{
        bcrypt.hash(req.body.password, 10).then(hashedPassword => {
            const user = new usersModel();
            user.firstName = req.body.fName;
            user.lastName = req.body.lName;
            user.phone = req.body.phone;
            user.email = req.body.email;
            user.profile = req.body.profile;
            user.active = true;
            user.save()
            .then((user) => {
                authModel.findOne({ phone: req.body.phone })
                .then((auth) => {
                    auth.password = hashedPassword;
                    auth.userId = user._id;
                    auth.verified = '';
                    auth.save().then((authSaved) =>{
                        res.json({'message': 'Success'})
                    })
                })
            })
        });
    }catch{
        res.json({'message': 'failed'});
    }
});

router.post('/verifyPhone', function(req, res,next) {
    var customerPhone = req.body.phoneToVerify;
    var passcode;
    //Send OTP to Customer
    /*client.messages
    .create({body: passcode, from: '+12562031967', to: '+917337817873'})
    .then(message => console.log(message.sid));*/

    authModel.findOne({ phone: customerPhone }).
    populate('userId').
    exec(function (error,authData) {
        if(error){
            res.status(200).json({
                authenticationId: '',
                message: 'auth failed'
              });
        }
        if(authData){
            if(authData.userId != null){
                res.status(200).json({
                    authenticationId: '',
                    message: 'user exist'
                });
            }
            else{
                passcode = authData.verified;
                      //Send OTP to Customer
                      console.log(passcode);
                        /*client.messages
                        .create({body: passcode, from: '+12562031967', to: '+917337817873'})
                        .then(message => console.log(message.sid));*/
                res.status(200).json({
                    authenticationId: authData._id
                });
            }
        }
        if(!authData && !error){
            passcode = Math.floor(100000 + Math.random() * 900000)
                const auth = new authModel();
                auth.phone = customerPhone;
                auth.verified = passcode;
                console.log(JSON.stringify(auth));
                auth.save()
                .then((result) => {
                    console.log(passcode);
                    /*client.messages
                    .create({body: passcode, from: '+12562031967', to: '+917337817873'})
                    .then(message => console.log(message.sid));*/
                    res.status(200).json({
                        authenticationId: result._id
                    });
                }).catch((error) => {
                    console.log(error);
                    res.status(404).json({
                        authenticationId: ''
                    });
                  })
        }
    });
});

router.post('/oneTimePassword', function(req, res,next) {
    console.log(req.body);
    authModel.findOne({ phone: req.body.phoneNum }).then((authData) => {
        if(authData !== null && authData.verified == req.body.otp){
            res.status(200).json({
                message: 'verified',
                authId: authData._id
            });
        }
        else{
            res.status(200).json({
                message: 'failed',
                authId: authData._id
            });
        }
    });
});

router.post('/login', function(req, res,next) {
    authModel.findOne({ phone: req.body.phone }).
    populate('userId').
    exec(function (error,authData) {
        if(error){
             res.status(200).json({
                message: 'login failed',
                token: ''
              });
        }
        else if(authData == null || authData == ''){
             res.status(200).json({
                message: 'user not found',
                token: ''
            })
        }
        else if(authData !== null){
            if(authData.userId === null){
                 res.status(200).json({
                    message: 'verification pending',
                    token:''
                })
            }
            else{
                bcrypt.compare(req.body.password, authData.password).then((passVerify) => {
                    if(passVerify == false){
                        res.status(200).json({
                            message: 'incorrect password',
                            token:''
                        })
                    }
                    else{
                        const token = jwt.sign(
                            { firstName: authData.userId.firstName, userId: authData.userId._id },
                             'this_is_a_secret_key_to_secure_user_password)');
                             res.status(200).json({
                                message: 'success',
                                token: token,
                                user: authData.userId
                            })
                    }
                });
            }
        }
    })
});

module.exports = router;