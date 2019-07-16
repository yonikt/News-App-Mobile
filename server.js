const express = require('express')
const request = require('request')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 9876
const newsModel = require('./models/newsModel')
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/news/:id', function (req, res){
    const id = req.params.id
    request.get(`https://newsapi.org/v2/top-headlines?country=il&apiKey=c1946b44b3a64af1b038578d49c95798`, function(error,response) {
    response=JSON.parse(response.body)
     const m1 = new newsModel({
        source: response.articles[id].source.name,
        updatedAt: response.articles[id].publishedAt,
        author:response.articles[id].author,
        title: response.articles[id].title,
        description: response.articles[id].description,
        picture: response.articles[id].urlToImage
    })
    m1.save()
    res.send(m1)
    }) 
 })


 app.post('/save', (req, res) => {
    const m2 = new newsModel(req.body)
    m2.save(() => res.json({ success: true }))
})






mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/mivzak', { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Running server on port ${port}`))
})



