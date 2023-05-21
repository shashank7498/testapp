const transactionsRouter = require('express').Router();
const Wallet = require('../Db/mongoDB/schema/wallet');

transactionsRouter.get('/', (req, res) => {
    const {walletId, skip, limit} = req.query;
    console.log(walletId, skip, limit);
    // skip & limit transaction
    Wallet.findById(walletId, { transactions: { $slice: [parseInt(skip), parseInt(limit)] } })
        .then((wallet) => {
            console.log(wallet);
            if (!wallet) {
                return res.status(404).send('Wallet not found');
            }
            const transactions = wallet.transactions;
            res.json(transactions);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

module.exports = transactionsRouter;