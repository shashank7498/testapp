// Define the routes
var express = require('express');
var setupWalletRouter = express.Router();
var mongodb = require('mongodb');
const Wallet = require('../Db/mongoDB/schema/wallet');

setupWalletRouter.post('/', (req, res) => {
const { name, balance } = req.body;
console.log(name, balance);
// Create a new wallet
const wallet = new Wallet({
    name,
    balance,
    transactions: []
    });
    console.log(wallet);
    wallet.markModified('new wallet');
wallet.save()
    .then((wallet) => {
        res.json(wallet);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
});


module.exports = setupWalletRouter;