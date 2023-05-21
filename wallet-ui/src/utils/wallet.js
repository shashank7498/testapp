import axios from "axios";
import {baseUrl} from "../db.credentials";

export function fetchTransactions(walletId, setTransactions) {
    axios.get(`${baseUrl}/transactions?walletId=${walletId}&skip=${0}&limit=${10}`)
        .then(res => {
            setTransactions(res.data);
        }).catch((err) => console.log(err));
}

export function fetchWalletDetails(walletId, setName, setWalletId, setBalance) {
    axios.get(`${baseUrl}/wallet/${walletId}`)
        .then(res => {
            console.log(res);
            setName(res.data.name);
            setWalletId(res.data._id);
            setBalance(res.data.balance);
        })
        .catch(err => console.log(err));
}

export function onboardNewWallet(name, balance, setWalletId, setName, setBalance, setDescription) {
    console.log(name);
    const body = {
        name: name,
        balance: Number(balance)
    }
    console.log(body);
    axios.post(`${baseUrl}/setup`, body)
        .then(res => {
            console.log(res);
            localStorage.setItem('walletId', res.data._id);
            setWalletId(res.data._id);
            setName(res.data.name);
            setBalance(res.data.balance);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err));
}

export function addNewTransaction(amount, description, walletId, setTransactions, fetchWalletDetailsCb) {
    const body = {amount, description};
    axios.post(`${baseUrl}/transact/${walletId}`, body)
        .then((res) => {
            fetchTransactions(walletId, setTransactions);
            fetchWalletDetailsCb();
        })
        .catch((err) => console.log(err));
}

export function logoutFromApplication(setName, setDescription, setBalance, setAmount, setTransactions, setWalletId) {
    return () => {
        localStorage.removeItem('walletId');
        setName(null);
        setDescription(null);
        setBalance(null);
        setAmount(0);
        setTransactions([]);
        setWalletId(null);
        setBalance(0);
    };
}

export function fetchWalletFromLocalStorage(setWalletId) {
    // Get the wallet from localstorage
    const walletIdLocalStorage = localStorage.getItem("walletId");
    console.log(walletIdLocalStorage);
    if (walletIdLocalStorage) {
        const walletId = walletIdLocalStorage;
        setWalletId(walletId);
    }
}