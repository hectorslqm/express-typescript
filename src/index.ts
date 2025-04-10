import express from 'express'
// const express = require('express') -> This is the CommonJS way of importing express, but in TypeScript, we use ES6 import syntax.
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // Middleware to parse JSON bodies

const PORT = 3000

app.get('/ping', (_, res) => {
    console.log('Someone pinged me!')
    res.send('Pong!')
})

app.use('/api/diaries', diaryRouter) // Mount the diary router on the /api/diaries path

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})