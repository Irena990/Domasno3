const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
    ime: {
        type: String,
    },
    igraci: {
        type: Number,
    },
    oprema: {
        type: String,
    },
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport;