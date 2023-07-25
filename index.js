const express = require('express');
const app = express()
const PORT = 2023

app.get('/', (req, res) => {
    res.send('🎉 Hello ExpressWorld! 🎉')
  })

app.listen(PORT, () => {
    console.log(`Server up and running on port http://localhost:${PORT}`)
  })