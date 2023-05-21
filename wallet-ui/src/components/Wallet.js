import {useEffect, useState} from "react";
import {
    addNewTransaction,
    fetchTransactions,
    fetchWalletDetails, fetchWalletFromLocalStorage,
    onboardNewWallet
} from "../utils/wallet";
import OnboardNewWallet from "./OnboardNewWallet";
import ViewWalletDetailsAndTransactions from "./ViewWalletDetailsAndTransactions";



function Wallet(props) {
    // wallet details
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState("");
    const [walletId, setWalletId] = useState(null);

    // transaction list
    const [transactions, setTransactions] = useState([]);

    // insert new transaction data
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        fetchWalletFromLocalStorage(setWalletId);

    }, []);

    useEffect(() => {
        if(walletId) {
            fetchWalletDetails(walletId, setName, setWalletId, setBalance);
            fetchTransactions(walletId, setTransactions);
        }
    }, [walletId]);

    const setupWallet = () => {
        if(name && name.length > 0) {
            onboardNewWallet(name, balance, setWalletId, setName, setBalance, setDescription);
        }
    }

    const addTransaction = () => {
        if(amount) {
            addNewTransaction(amount, description, walletId, setTransactions, () => fetchWalletDetails(walletId,setName,setWalletId, setBalance));
        }
    }
    return <>
        {
            !walletId
                ?
                <OnboardNewWallet
                    defaultValue={name}
                    onChange={(event) => setName(event.target.value)}
                     defaultValue1={balance} onChange1={(event) => setBalance(event.target.value)}
                     onClick={setupWallet}/>
                :
                <ViewWalletDetailsAndTransactions name={setName}
                      description={setDescription}
                      balance={setBalance}
                      amount={setAmount}
                      transactions={setTransactions}
                      walletId={setWalletId}
                      name1={name}
                      balance1={balance}
                      defaultValue={amount}
                      onChange={(event) => setAmount(Number(event.target.value))}
                      defaultValue1={description}
                      onChange1={(event) => setDescription(event.target.value)}
                      onClick={addTransaction}
                      transactions1={transactions}/>
        }
    </>
}

export default Wallet;