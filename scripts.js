const Modal = {
  open() {
    document /* The HTML document as an JS object, DOM */
      .querySelector('.modal-overlay')
      .classList
      .add('active')
  },
  close() {
    document
    .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}

const transactions = [
  {
  id: 1,
  description: 'Luz',
  amount: -50000,
  date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
  }
]

const Transaction = {
  incomes() {

  },
  expenses() {

  }
}

/* Object DOM created to manage the actions (transactions, etc) */
const DOM = {
  /* This will be the transactions container (will be added to the body of the table) */
  transactionsContainer: document.querySelector('#data-table tbody'),

  /* Adds a new transaction */
  addTransaction(transaction, index) {
    /* Creates a new transaction table row (tr) */
    const tr = document.createElement('tr')
    /* Fill the transaction table row (tr) using the innerHTMLTransaction method (line 60) */
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    /* Appends the new transaction table row to the table body */
    DOM.transactionsContainer.appendChild(tr)
  },
  /* Fill the table row created above with the transaction data */
  innerHTMLTransaction(transaction) {
    const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação"></td>
    `
    return html
  }
}
