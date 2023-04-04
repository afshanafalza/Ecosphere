
const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine','ejs')


app.listen(3000, () => {
    console.log('Server listening on port 3000...')
})

app.get("/about", function (request, response) {
    response.sendFile(__dirname + './public/About Us Page/about.html');
});

app.get("/cartindex", function (request, response) {
    response.sendFile(__dirname + './public/Cart Page/cartindex.html');
});

app.get("/shopindex", function (request, response) {
    response.sendFile(__dirname + './public/Shopping Page/shopindex.html');
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + './public/index.html');
});
