const express = require('express');
const app = express()
// const { User, Work, Comment } = require('./models');
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// Splash Page
app.get('/', (req, res) => {
    try {
        res.json('HELLO WORLD')
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
})
// Results Page (all works)
app.get('/scribbls', async (req, res) => {
    try {

        // const scribbl = await Work.findAll()
        res.json('Scribbls Results Page')

    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
})
// individual works by id 
app.get('/scribbls/:id', async (req, res) => {
    try {
        id = req.params.id
        const scribbl = await Work.findById(id)
        res.json({ scribbl } + " This is an individual Scribbl")

    } catch (e) {
        res.status(404).json({
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
        res.status(404).json({
            message: e.message
        })
    }
})

//create new user 
app.post('/login/sign-up', async (req, res) => {
    try {
        const user = await User.create()
        res.json(user)

    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
})
// user profile
app.get('/user-profile', async(req,res)=>{
    try{
        const userid = req.params.id
        const profile = await User.findById(userid)
        res.json({profile})
    }catch(e){

    }
})


app.listen(PORT, () => console.log(`Example app listening on ${PORT}`))
