const newsSchema = require( './newsSchema' )
const mongoose = require( 'mongoose' )


const newsModel = mongoose.model( 'mivzak', newsSchema )



module.exports = newsModel
