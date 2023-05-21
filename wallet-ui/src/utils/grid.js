export function getColumnsDefForTransactions() {
    return [

        {
            field: 'walletId',
            headerName: 'Wallet ID',
            width: 150,
            editable: false,
        },
        {
            field: '_id',
            headerName: 'ID',
            width: 150,
            editable: false,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 150,
            editable: false,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 150,
            editable: false,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: false,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            editable: false,
        },


    ];
}