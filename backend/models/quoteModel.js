const mongoose = require('mongoose')

const Schema = mongoose.Schema

const QuoteSchema = new Schema({
    quoteText: {
        type: String
    },
    quoteAuthor: {
        type: String
    },
})

module.exports = mongoose.model('quotes', QuoteSchema)