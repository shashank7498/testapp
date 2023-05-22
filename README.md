This is offline transaction app

Live project with link - https://paywallet.onrender.com/

# Wallet System
This project implements a backend service and a frontend web app for a wallet system. The backend service supports the following operations:

- Setup wallet
- Credit / Debit transactions
- Fetching transactions on wallet
- Get wallet details

The frontend web app allows users to view their wallet balance and transactions.
## Wallet System API

This API provides functionality for a wallet system, allowing users to set up wallets, perform credit and debit transactions, fetch transaction history, and get wallet details.

## Endpoints

### 1. Initialize Wallet

- **Endpoint**: `POST /setup`
- **Description**: Sets up a new wallet with an initial balance.
- **Request Body**:
  - `balance`: The initial balance for the wallet (decimal up to 4 precision points).
  - `name`: The name of the wallet.
```
{
    "name":"nikkku",
    "balance":55
}
```
- **Response**:
  - `id`: The ID of the created wallet.
  - `balance`: The current balance of the wallet.
  - `transactionId`: The ID of the transaction.
  - `name`: The name of the wallet.
  - `date`: The date the wallet was created.
```
  {
    "_id": "646923f2d67b3a6ddae5c5aa",
    "name": "nikkku",
    "balance": 55,
    "transactions": [],
    "createdAt": "2023-05-20T19:48:02.773Z",
    "updatedAt": "2023-05-20T19:48:02.773Z"
  }

```

### 2. Credit/Debit Amount

- **Endpoint**: `POST /transact/:walletId`
- **Description**: Credits or debits the requested amount to the specified wallet.
- **Request Parameters**:
  - `walletId`: The ID of the wallet to perform the transaction on.
```
  POST /transact/646923f2d67b3a6ddae5c5aa
```
- **Request Body**:
  - `amount`: The amount to be credited (positive number) or debited (negative number) to the wallet (decimal up to 4 precision points).
  - `description`: The description of the transaction.

```
  {
    "amount":99,
    "description":"updated"
  }
```
- **Response**:
  - `balance`: The updated balance of the wallet after the transaction.
  - `transactionId`: The ID of the transaction.

```
{
    "_id": "646923f2d67b3a6ddae5c5aa",
    "name": "nikkku",
    "balance": 154,
    "transactions": [
        {
            "_id": "64692452d67b3a6ddae5c5ad",
            "walletId": "646923f2d67b3a6ddae5c5aa",
            "amount": 99,
            "balance": 154,
            "description": "updated",
            "date": "2023-05-20T19:49:38.195Z",
            "type": "CREDIT"
        }
    ],
    "createdAt": "2023-05-20T19:48:02.773Z",
    "updatedAt": "2023-05-20T19:49:38.198Z"
}
```

### 3. Fetch Transactions

- **Endpoint**: `GET /transactions?walletId={walletId}&skip={skip}&limit={limit}`
- **Description**: Fetches the recent transactions for the specified wallet.
- **Query Parameters**:
  - `walletId`: The ID of the wallet to fetch the transactions for.
  - `skip`: The number of transactions to skip (optional, default: 0).
  - `limit`: The maximum number of transactions to fetch (optional, default: 10).
```
GET /transactions/?walletId=646b481e76e82b271c4a36a1&skip=0&limit=10
```
- **Response**: An array of transaction objects, each containing:
  - `_id`: The ID of the transaction.
  - `walletId`: The ID of the wallet.
  - `amount`: The amount of the transaction.
  - `balance`: The balance of the wallet after the transaction.
  - `description`: The description of the transaction.
  - `date`: The date of the transaction.
  - `type`: The type of the transaction (CREDIT/DEBIT).

```
  [
    {
        "walletId": "646b481e76e82b271c4a36a1",
        "amount": 25.04,
        "balance": 55.04,
        "description": "refund",
        "date": "2023-05-22T10:48:05.584Z",
        "type": "CREDIT",
        "_id": "646b486576e82b271c4a36a6"
    },
    {
        "walletId": "646b481e76e82b271c4a36a1",
        "amount": -32,
        "balance": 23.04,
        "description": "food",
        "date": "2023-05-22T10:48:29.471Z",
        "type": "DEBIT",
        "_id": "646b487d76e82b271c4a36ad"
    }
]
```

### 4. Get Wallet

- **Endpoint**: `GET /wallet/:id`
- **Description**: Fetches the details of the specified wallet.
- **Request Parameters**:
  - `id`: The ID of the wallet to fetch.
- **Response**:
  - `_id`: The ID of the wallet.
  - `balance`: The current balance of the wallet.
  - `name`: The name of the wallet.
  - `date`: The date the wallet was created.
```
{
    "_id": "646b481e76e82b271c4a36a1",
    "name": "Nikku",
    "balance": 122.0399,
    "createdAt": "2023-05-22T10:46:54.809Z",
    "updatedAt": "2023-05-22T10:54:58.873Z"
}
```

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas ( A cloud mongoDb database service )
- JavaScript

## Setup Instructions

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up the database connection in the appropriate configuration file.
4. Run the application using `npm start`.

## Contributing

Contributions to the project are welcome. If you find any issues or would like to add new features, please open an issue or submit a pull request.



