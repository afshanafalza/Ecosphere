
const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine','ejs')


app.listen(3000, () => {
    console.log('Server listening on port 3000...')
})
