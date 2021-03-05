const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
}

const defaultRequiredDate = { 
    type: Date, default: Date.now
}

const logEntrySchemas = new Schema({
    title: {
        type: String,
        required: true,
    },
    Description: String,
    comments: String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90,
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,

    },
    created_at: defaultRequiredDate,
    updated_at: defaultRequiredDate,
    visitedDate: {
        required: true,
        type: Date,
    },
}, {
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchemas);

module.exports = LogEntry;