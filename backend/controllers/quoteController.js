const Quote = require('../models/quoteModel')

exports.index = async (req, res, next) => {
    try {
        const randomQuote = await Quote.aggregate().sample(1);
        console.log(randomQuote)
        res.status(200).json({
            randomQuote
        })
    } catch (err) {
        console.log(err)

    }
}