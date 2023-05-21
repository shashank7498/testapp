const transactRouter = require('express').Router();
const Wallet = require('../Db/mongoDB/schema/wallet');
const mongodb = require('mongodb');

transactRouter.post('/:walletId', (req, res) => {
    const { walletId } = req.params;
    const { amount, description } = req.body;
    console.log(walletId, amount, description);
    // add transaction to wallet and update balance with amount
    Wallet.findOne({ _id: walletId })
        .then((wallet) => {
            if (!wallet) {
                return res.status(404).send('Wallet not found');
            }
            const transaction = {
                walletId,
                amount,
                balance: wallet.balance + amount,
                description,
                date: new Date(),
                type: amount > 0 ? 'CREDIT' : 'DEBIT'
            };
            wallet.transactions.push(transaction);
            wallet.balance += amount;
            wallet.save()
                .then((wallet) => {
                    res.json(wallet);
                })
                .catch((err) => {
                    res.status(500).send(err.message);
                });
        }
        )
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

module.exports = transactRouter;