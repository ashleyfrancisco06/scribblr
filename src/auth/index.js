// const express = require('express')
// const router = express.Router();
// const bcrypt = require('bcrypt') //he used first one when searching npm site for "bcrypt"
// //route paths are prepended with auth

// // in app.js will need to pass a secret into app.use(cookieParser('thisisthesecret')) this encrypts the cookie, putting the secret in the process.env is even more secure

// app.get('/auth', (req, res) => {
//     res.json({
//         message: 'auth'
//     })
// })

// function validateUser(user){
//     const validEmail = user.email //should be string, and not blank
//     const validPassword = user.password //same as above + any other parameters

//     return validEmail && validPassword;

// }

// // 'user' below is a reference to the table name, need to adapt for sequelize
// function getOneByEmail(email){
//     return 'user'.where('email', email).first()
// }

// function create (user) { // this adds the user to the database, need to adapt to sequelize
//     return "user".insert(user, 'id').then(ids => {
//         return ids[0]
//     })
// }

// app.post('/signup', (req, res, next) => {
//     if(validateUser(req.body)) {
//         getOneByEmail(req.body.email) //this is coming from another file, need to check
//         .then(user => {
//             console.log('user', user)
//             if(!user) {
//                 bcrypt.hash(req.body.password, 8) // saltRounds is number of times, more is stronger
//                     .then(hash => {
                       
//                         const user = {
//                             email: req.body.email,
//                             password: hash,
//                             created_at: new Date() //this is the column in postgres, it may do this automatically
//                         }

//                         create(user).then(id => {
//                             res.json({
//                                 hash,
//                                 message: 'created'
//                             }) 
//                         })
//                     })
//             }       
//         })
//     } else {
//         next(new Error('Invalid User'))
//     }
// })

// app.post('/login', (req, res) => { //going to the /auth route
//     if(validateUser(req.body)) {
//         //check to see if in database
//         getOneByEmail(req.body.email).then(user => {
//             if(user){
//                 //compare pwds
//                 bcrypt.compare(req.body.password, user.password).then(result => { //user.password is the hashed password from the db
//                     // if passwords match
//                     if (result) {
//                         //set cookie header
//                         res.cookie('user_id', user.id, {
//                             httpOnly: true, // only accessible to web server
//                             signed: true, // best practices
//                             secure: true // makes work on https only, wont work while in development
//                         })
//                         res.json({
//                             result,
//                             message: 'logged in'
//                         })
//                     } else {
//                         //invalid login error
//                     }
//                 })
//             }else{
//                 //invalid login error
//             }
//         })
//     } else {
//         // Error message = "invalid email"
//     }
// })

// module.exports = router