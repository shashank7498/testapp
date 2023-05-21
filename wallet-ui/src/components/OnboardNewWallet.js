import * as PropTypes from "prop-types";
import {Button, TextField} from "@mui/material";

function OnboardNewWallet(props) {
    return <div style={{margin: 20, display: 'flex', flexDirection: "column", gap: '20px'}}>
        <TextField
            label="Wallet Name"
            type="text"
            onChange={props.onChange}
            defaultValue={props.defaultValue}
        />
        <TextField
            label="Balance"
            type="number"
            onChange={props.onChange1}
            defaultValue={props.defaultValue1}
        />
        <Button
            variant="contained"
            onClick={props.onClick}
            color={'secondary'}
        >Submit</Button>
    </div>;
}

OnboardNewWallet.propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue1: PropTypes.number,
    onChange1: PropTypes.func,
    onClick: PropTypes.func
};
export default OnboardNewWallet;