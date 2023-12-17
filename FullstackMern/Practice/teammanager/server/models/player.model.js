const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Player name is required"],
        minlength: [2, "Name must be at least 2 characters in length"],
    },
    PrePosition: {
        type: String,
    },
   
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
