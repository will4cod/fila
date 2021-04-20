const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//Load User Model
const User = require('../models/User')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            
            //Match User
            User.findOne({ email: email })
                .then(user => {
                    //if there is no match
                    if(!user) {
                        //null for the error, false for the user and the messagem is there is no match
                        return done(null, false, { message: 'Nenhum usuário cadastrado com esse email' })
                    }

                    //Match Password
                    //Compare the hased password with the input password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err

                        if(isMatch) {
                            //null for the error, user for the user
                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'Senha incorreta' })
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });
}