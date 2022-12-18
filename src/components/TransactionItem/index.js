import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {id, title, amount, type} = transactionDetails
  return (
    <li className="listItem" key={id}>
      <p className="para2">{title}</p>
      <p className="para2">RS {amount}</p>
      <p className="para2">{type}</p>
      <button className="deleteButton" type="button">
        <img
          alt="delete"
          className="deleteIcon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
