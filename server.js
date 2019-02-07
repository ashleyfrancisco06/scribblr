const express = require('express');
const app = express()
const { User, Work, Comment } = require('./src/models/models');
const PORT = process.env.PORT || 4567
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// Splash Page
app.get('/', async (req, res) => {
    try {
        const login = await User.findById(req.params.id)
        res.json(login)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

// app.get('/auth', async (req, res) => {
//     res.json({
//         message: 'auth'
//     })
// })

// Results Page (all works)
app.get('/scribbls', async (req, res) => {
    try {

        const scribbl = await Work.findAll()
        res.json({ scribbl })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})
// individual works by id 
app.get('/scribbls/:id', async (req, res) => {
    try {
        id = req.params.id
        const scribbl = await Work.findById(id)
        res.json({ scribbl })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

app.get('/scribbls/byType/:type', async (req, res) => {
    try {
        const type = req.params.type
        const scribbls = await Work.findAll({
            where: {
                type
            }
        })
        res.json({ scribbls })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

//create new scribbl 
app.post('/create-scribbl', async (req, res) => {
    try {
        const scribbl = await Work.create(req.body)
        res.json({ scribbl })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

//update scribbl

app.put('/scribbls/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const updatedScribl = {
          title: req.body.title,
          content: req.body.content,
          type: req.body.type
        };
        const scribbl = await Work.update(updatedScribl, { where: {id: id} })
        console.log(scribbl)
        res.json(scribbl)
      } catch(e) {
        console.error(e)
        res.status(500).json({message: e.message})
      }
    
    });


      

// login route 
// app.get('/login', async (req, res) => {
//     try {
//         const login = await User.findById(req.params.id)
//         res.json(login)
//     } catch (e) {
//         res.status(500).json({
//             message: e.message
//         })
//     }
// })

//create new user 
// I have commented this out because I am building this into the auth/signup route
// app.post('/login/sign-up', async (req, res) => {
//     try {
//         const user = await User.create()
//         res.json(user)

//     } catch (e) {
//         res.status(500).json({
//             message: e.message
//         })
//     }
// })

// user profile
app.get('/user-profile/:id', async (req, res) => {
    try {
        const userid = req.params.id
        const profile = await User.findById(userid)
        res.json({ profile })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

//get all comments
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.findAll()
        res.json({ comments })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

// create comment
app.post('/scribbls/:id/comment', async (req, res) => {
    try {
        console.log(req.body)

        const comment = await Comment.create(req.body)
        res.json({ comment })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

//delete user

app.delete('/user-profile/:id', async (req, res) => {
    try {
        const userid = req.params.id
        const user = await User.destroy({
            where: {
                id: userid
            }
        })
        res.json({ message: `User ${user} was deleted.` })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

// delete comment
app.delete('/scribbls/:id/comment', async (req, res) => {
    try {
        const commentid = req.params.id
        const comment = await Comment.destroy({
            where: {
                id: commentid
            }
        })
        res.json({ message: `Comment ${comment} was deleted.` })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

// authentication routes
const bcrypt = require('bcrypt')
// in app.js will need to pass a secret into app.use(cookieParser('thisisthesecret')) this encrypts the cookie, putting the secret in the process.env is even more secure

app.get('/auth', (req, res) => {
    res.json({
        message: 'auth'
    })
})

const validateUser = async (user) => {
    const validEmail = user.email //should be string, and not blank
    // const validPassword = user.password //same as above + any other parameters

    return validEmail;
    // return validEmail && validPassword;


}

// 'user' below is a reference to the table name, need to adapt for sequelize
const getUserbyEmail = async (email) => {
    let user = await User.findOne({
        where: {
            email
        }
    })
    return user
}

const createUser = async (user) => { // this adds the user to the database, need to adapt to sequelize
    const newUser = await User.create(user)
    console.log(newUser)
    const newUserId = await User.get({
        where: {
            id: newUser.id
        }
    })
    console.log(newUserId)
    return newUserId
}

app.post('/auth/signup', (req, res) => {
    if(validateUser(req.body)) {
        getUserbyEmail(req.body.email)
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.password, 8) // saltRounds is number of times, more is stronger
                    .then(hash => {
                       
                        const user = {
                            email: req.body.email,
                            user_name: req.body.user_name,
                            password: hash,
                            createdAt: new Date() //this is the column in postgres, it may do this automatically
                        }

                        createUser(user).then(newUserId => {
                            res.json({
                                newUserId,
                                hash,
                                message: 'created'
                            }) 
                        })
                    })
            } else {
                res.json({
                    message: 'That account already exists, please login to continue'
                })
            }
        })
    } else {
        res.json({
            message: "BROKEN"
        })
    }
})

app.post('/auth/login', (req, res) => { //going to the /auth route
    if(validateUser(req.body)) {
        //check to see if in database
        getUserbyEmail(req.body.email).then(user => {
            if(user){
                //compare pwds
                bcrypt.compare(req.body.password, user.password).then(result => { //user.password is the hashed password from the db
                    // if passwords match
                    res.json({
                        message: `User ${user.user_name} and ${result}`
                    })
            //         if (result) {
            //             //set cookie header
            //             res.cookie('user_id', user.id, {
            //                 httpOnly: true, // only accessible to web server
            //                 signed: true, // best practices
            //                 secure: true // makes work on https only, wont work while in development
            //             })
            //             res.json({
            //                 result,
            //                 message: 'logged in'
            //             })
            //         } else {
            //             //invalid login error
            //         }
                })
            }else{
                res.json({
                    message: "Invalid User"
                })
            }
        })
    } else {
        res.json({
            message: "Please Sign-Up to continue"
        })
    }
})


app.listen(PORT, () => console.log(`Example app listening on ${PORT}`))
