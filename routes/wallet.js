const walletRouter = require('express').Router();
const Wallet = require('../Db/mongoDB/schema/wallet');

walletRouter.get('/:walletId', (req, res) => {
    const { walletId } = req.params;
    Wallet.findById(walletId, { transactions: 0 })
        .then((wallet) => {
            if (!wallet) {
                return res.status(404).send('SetupWallet not found');
            }
            res.json(wallet);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

module.exports = walletRouter;