 const mongoose = require("mongoose");

// Define the schema for the wallet model
const WalletSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    transactions: [
        {
            walletId: {
                type: String
            },
            amount: {
                type: Number
            },
            balance: {
                type: Number
            },
            description: {
                type: String
            },
            date: {
                type: Date
            },
            type: {
                type: String
            }
        },
    ],
}, {
    timestamps: true,
    versionKey: false
});

// Create the model from the schema and export it
module.exports = mongoose.model("Wallet", WalletSchema);
