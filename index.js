const express = require('express');
const cors = require('cors')
const app = express()
const PORT = 2023

app.use(cors())

app.get('/', (req, res) => {
    res.send('🎉 Hello ExpressWorld! 🎉')
})

app.listen(PORT, () => {
    console.log(`Server up and running on port http://localhost:${PORT}`)
})