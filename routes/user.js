const express = require('express');
const app = express()
const { User, Work, Comment } = require('../src/models/models');


//create new scribbl 
const createWork = app.post('/user/create-scribbl', async (req, res) => {
    try {
        const scribbl = await Work.create(req.body)
        res.json({ scribbl })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

const updateWork = app.put('/user/scribbl/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const updatedScribl = {
          title: req.body.title,
          content: req.body.content,
          type: req.body.type
        };
        const scribbl = await Work.update(updatedScribl, { where: {id: id} })
        res.json(scribbl)
      } catch(e) {
        console.error(e)
        res.status(500).json({message: e.message})
      }
});

const createComment = app.post('/user/scribbls/:id/comment', async (req, res) => {
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

const deleteUser = app.delete('/user/user-profile/:id', async (req, res) => {
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

const deleteComment = app.delete('/user/scribbls/:id/comment', async (req, res) => {
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

module.exports = {
    createWork,
    createComment,
    updateWork,
    deleteUser,
    deleteComment
}