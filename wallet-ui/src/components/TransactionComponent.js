import * as PropTypes from "prop-types";
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {getColumnsDefForTransactions} from "../utils/grid";

function TransactionComponent(props) {
    return <DataGrid
        columns={getColumnsDefForTransactions()}
        slots={
            {
                toolbar: GridToolbar
            }
        }
        rows={props.transactions}
        rowGetter={i => props.transactions[i]}
        getRowId={(row) => row._id}
        rowsCount={props.transactions.length}
        minHeight={150}
        csvFilename={"transactions.csv"}
        experimentalFeatures={[
            'rowReorder',
            'ghostRows',
            'columnReorder',
            'columnsHide',
            'densityCompact',
            'pagingServer',
            'sortingServer',
        ]}
        sortColumns={[
            {
                key: 'date'
            },
            {
                key: 'amount'
            }
            ]}
        getCellClassName={(params) => {
            // color the cell if amount is positive or negative
            if (params.field === 'amount') {
                return Number(params.value) > 0 ? 'positive' : 'negative';
            }
        }}

    />;

}

TransactionComponent.propTypes = {transactions: PropTypes.any};

export default TransactionComponent;