const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provide"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum:{
            values: ["Zara", "Brocade", "Kasa", "Lakhey", "Mode", "Nike", "Gucci", "Addidas", "Chanel"],
            message: `{VALUE} is not supported`,
        },
    },

});

module.exports = mongoose.model("Product", productSchema);