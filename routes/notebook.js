const express = require('express')
const router = express.Router()
const Notebook = require('../models/notebook')

router.get('/', async (req, res) => {
    try {
        const notebook = await Notebook.find()
        res.json(notebook)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const note = await Notebook.findById(req.params.id)
        res.json(note)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const notebook = new notebook({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const note = await notebook.save()
        res.send(note)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const note = await Notebook.findById(req.params.id)
        note.sub = req.body.sub
        const newNote = await Notebook.save()
        res.json(newNote)
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const note = await Notebook.findById(req.params.id)
        note.sub = req.body.sub
        const updatedNote = await Notebook.remove()
        res.json(updatedNote)
    } catch (err) {
        res.send('Error')
    }
})

module.exports = router