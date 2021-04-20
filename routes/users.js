const express = require('express')
const router = express.Router()
const bcryspt = require('bcryptjs')
const passport = require('passport')

//User Model
const User = require('../models/User')

//Login Page
router.get('/login', (req, res) => {
    res.render('login')
})

//Register Page
router.get('/register', (req, res) => {
    res.render('register')
})

//Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body
    let errors = []

    //Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Todos os campos devem ser preenchidos' })
    }

    //Check passwords match
    if(password !== password2) {
        errors.push({ msg: 'As senhas não são iguais' })
    }

    //Chech password length
    if(password.length < 6) {
        errors.push({ msg: 'A senha deve ter pelo menos 6 caracteres' })
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        //validation passed
        //Search if there is already that user
        User.findOne({ email: email })
            .then(user => {
                if(user) {
                    //User exists
                    errors.push({ msg: 'Já existe um usuário com esse email' })
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    })
                } else {
                    const newUser = new User({
                        name, 
                        email,
                        password
                    })

                    //Hash password
                    bcryspt.genSalt(10, (err, salt) => bcryspt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err
                        //set password to hashed
                        newUser.password = hash
                        //save user
                        newUser.save()
                            .then(user => {
                                //calling the flash
                                req.flash('success_msg', 'Usuário registrado com sucesso! Para acessar sua conta faça o login')
                                res.redirect('/users/login')
                            })
                            .catch(err => console.log(err))
                    }))
                }
            })
    }
})

//Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    }) (req, res, next)
})

//Logout Handle
router.get('/logout', (req, res) => {
    req.logOut()
    req.flash('success_msg', 'Você está desconectado')
    res.redirect('/users/login')
})

module.exports = router