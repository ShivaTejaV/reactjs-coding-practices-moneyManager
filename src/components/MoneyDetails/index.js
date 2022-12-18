import './index.css'

const MoneyDetails = props => {
  const {list, getExpenses} = props
  const getMoneyDetails = () => {
    getExpenses(list)
  }

  const {updatedExpenses, updatedIncome, updatedBalance} = getMoneyDetails()

  return (
    <div className="middleContainer">
      <div className="tab balanceTab">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image1"
        />
        <div>
          <p className="tabName">Your Balance</p>
          <p className="displayAmount">RS {updatedBalance}</p>
        </div>
      </div>

      <div className="tab incomeTab">
        <img
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image1"
        />
        <div>
          <p className="tabName">Your Income</p>
          <p className="displayAmount">RS {updatedIncome}</p>
        </div>
      </div>

      <div className="tab expensesTab">
        <img
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image1"
        />
        <div>
          <p className="tabName">Your Expenses</p>
          <p className="displayAmount">RS {updatedExpenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
