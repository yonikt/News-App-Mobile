const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema;


const newsSchema = new Schema( {
   
    source: String,
    updatedAt: Date,
    author: String,
    title: String,
    description: String,
    picture: String

})

module.exports = newsSchema
