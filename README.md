# Fawry Shop Console App

This is a simple Node.js console-based e-commerce system that lets a customer add products to a cart, view the cart, edit or remove items, deposit money, check balance, and perform checkout.

## Features

- Add products to the cart with quantity validation.
- Remove products from the cart.
- Edit quantities of products already in the cart.
- View cart contents.
- View customer balance.
- Deposit money to customer balance.
- Checkout with:
  - Order subtotal.
  - Shipping fees.
  - Total amount paid.
  - Updated customer balance.
- Full error handling: empty cart, insufficient balance, expired or out-of-stock items, invalid commands.

## Available Commands

- `add <productName> <quantity>` `ex: add tv 2` – Add a product to the cart.
- `remove <productName>` `ex: remove tv` – Remove a product from the cart.
- `edit <productName> <newQuantity>` `ex: edit tv 1` – Change quantity of a product in the cart.
- `show` – Show cart items.
- `balance` – Display current customer balance.
- `deposit <amount>` `deposit 1000` – Add money to customer balance.
- `checkout` – Checkout and print receipt.
- `exit` – Exit the app.

## Example

```bash
>>> add cheese 2
Added 2 cheese in Cart
>>> show
Cart items:
- 2x cheese (200$)
>>> balance
Current balance: 1000$
>>> deposit 300
Deposited 300$. New balance: 1300$
>>> checkout
** Checkout receipt **
2x cheese 200
----------------------
Subtotal 200
Shipping 30
Amount 230
Customer balance after payment 1070
```

## How Run 
```bash 
node index.js
```

## Contact

- **CV**: [Link to my CV](https://drive.google.com/file/d/1pJqdQvpMkiWUJ8TDEAiGaqrQ_-da-gHj/view?usp=drive_link)
- **Portfolio**: [badawy24.github.io/Badawy-Portfolio](https://badawy24.github.io/Badawy-Portfolio/)
- **Email**: abdelrahman.ahmed2410@gmail.com
- **Phone**: +201012237280 | +201094990196
