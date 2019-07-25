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



app.get('/news', function (req, res) {
    const id = req.params.id
    request.get(`https://newsapi.org/v2/top-headlines?country=il&apiKey=c1946b44b3a64af1b038578d49c95798`, function (error, response) {
        response = JSON.parse(response.body)
        response = response.articles.map(i => ({
            source: i.source.name,
                updatedAt: i.publishedAt,
                    author: i.author,
                        title: i.title,
                            description: i.description,
                                picture: i.urlToImage,
                                url: i.url
        }))

        res.send(response)
    })
})


app.get('/save', function (req, res) {
   newsModel.find({}, function (err, data) {
        res.send(data)
    })
})


app.post('/save', (req, res) => {
    const m2 = new newsModel(req.body)
    m2.save(() => res.json({ success: true }))
})

app.delete('/news/:article', function (req, res) {
    const article = req.params.article
    newsModel.findOneAndRemove({ 'name': article }).then(function () {
    })
    res.end()
})






mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mivzak', { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Running server on port ${port}`))
})



