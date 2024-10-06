const mongoose = require('mongoose');

const ConcertSchema = mongoose.Schema({
    band: {
        type: String,
        required: [true, 'please, enter band name'],
    },
    date: { 
        type: Date,
        required: [true, 'please, enter concert date']
    },
    timestamps: true,
});

const Concert = mongoose.model('Concert', ConcertSchema);
module.exports = Concert;