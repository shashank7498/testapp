import {logoutFromApplication} from "../utils/wallet";
import * as PropTypes from "prop-types";
import TransactionComponent from "./TransactionComponent";
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BadgeIcon from '@mui/icons-material/Badge';
import {Button, TextField} from "@mui/material";

function ViewWalletDetailsAndTransactions(props) {
    return <>
        <div style={{margin: 20, display: "flex", flexDirection: "column-reverse"}}>
            <Button
                variant="contained"
                onClick={logoutFromApplication(props.name, props.description, props.balance, props.amount, props.transactions, props.walletId)}
                color={'secondary'}
            > <LogoutIcon /></Button>
        </div>
        <br/>
        <div style={{display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            margin: "20px"}}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center"}}><BadgeIcon fontSize={'large'}/><h1>&nbsp; {props.name1}</h1></div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center"}}><AccountBalanceWalletIcon />&nbsp; Balance: {props.balance1}</div>
        </div>
        <br/>
        <div style={{display: "flex",
            flexDirection: "column",
            margin: "20px"}}>
            <h1>Add Transactions</h1>
            <TextField
                label="Amount"
                type="number"
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            />
            <br/>
            <TextField
                label="Description"
                type="text"
                onChange={props.onChange1}
                defaultValue={props.defaultValue1}
            />
            <br/>
            <Button
                variant="contained"
                onClick={props.onClick}
                color={'secondary'}
            > <AddIcon /></Button>
        </div>
        <br/>
        <div style={{margin: '20px'}}>
            <h1>Transactions</h1>
            <TransactionComponent transactions={props.transactions1}/>
        </div>
    </>;
}

ViewWalletDetailsAndTransactions.propTypes = {
    name: PropTypes.func,
    description: PropTypes.func,
    balance: PropTypes.func,
    amount: PropTypes.func,
    transactions: PropTypes.func,
    walletId: PropTypes.func,
    name1: PropTypes.string,
    balance1: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    defaultValue1: PropTypes.func,
    onChange1: PropTypes.func,
    onClick: PropTypes.func,
    transactions1: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};
export default ViewWalletDetailsAndTransactions;