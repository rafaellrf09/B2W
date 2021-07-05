const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weather: {
        type: String
    },
    terrain: {
        type: String,
    },
    films: {
        type: Number,
    }
}, {
    timestamps: true,
}

);

module.exports = mongoose.model('planets', PlanetSchema);