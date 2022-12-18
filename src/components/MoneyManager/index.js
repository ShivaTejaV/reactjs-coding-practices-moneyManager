import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {transactionList, title, amount, type} = this.state

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type,
    }

    const updatedTransactionList = [...transactionList, newTransaction]
    this.setState({
      transactionList: updatedTransactionList,
      title: '',
      amount: '',
      type: 'INCOME',
    })
  }

  render() {
    const {transactionList, title, amount, type} = this.state

    const getExpenses = list => {
      let updatedExpenses = 0
      let updatedIncome = 0
      let updatedBalance = 0

      list.forEach(eachTransaction => {
        if (eachTransaction.type === transactionTypeOptions[1].displayText) {
          updatedExpenses += eachTransaction.amount
          updatedBalance += eachTransaction.amount
        } else if (
          eachTransaction.type === transactionTypeOptions[0].displayText
        ) {
          updatedIncome += eachTransaction.amount
          updatedBalance -= eachTransaction.amount
        }
      })

      return {updatedExpenses, updatedIncome, updatedBalance}
    }

    return (
      <div className="bg">
        <div className="Welcome">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <MoneyDetails list={transactionList} getDetails={this.getExpenses} />

        <div className="bottomContainer">
          <div className="transactionForm">
            <h1>Add Transaction</h1>
            <form onSubmit={this.addTransaction}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <br />
              <input
                id="title"
                className="title"
                type="text"
                placeholder="TITLE"
                onChange={this.onTitleChange}
                value={title}
              />
              <br />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <br />
              <input
                id="amount"
                className="amount"
                type="text"
                placeholder="AMOUNT"
                onChange={this.onAmountChange}
                value={amount}
              />
              <br />
              <p>TYPE</p>

              <select
                value={type}
                className="transactionType"
                onChange={this.onTypeChange}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button type="submit" className="addButton">
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1 className="historyHeading">History</h1>
            <ul className="historyList">
              <li className="listItem" key="1">
                <p className="para1">Title</p>
                <p className="para1">Amount</p>
                <p className="para1">Type</p>
              </li>
              {transactionList.map(eachItem => (
                <TransactionItem
                  transactionDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
