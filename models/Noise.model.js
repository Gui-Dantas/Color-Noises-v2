const { Schema, model } = require("mongoose");

const noiseSchema = new Schema(
    {
        name: String,
        imageUrl: String,
        sound: String,
    },
    {
        timestamps: true
    }
);

const Noise = model("Noise", noiseSchema);

module.exports = Noise;
