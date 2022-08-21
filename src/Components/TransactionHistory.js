import React from 'react'

 function TransactionHistory({transactions, onDeleteTransaction}) {
  return (
    <div>
      <h2>Transaction History</h2>
        <ul className='transactions' >
          {transactions.map((data) => (
            <li key={data.id}>
              {data.name} #{data.amount}
              <button
                className="del-btn"
                onClick={() => onDeleteTransaction(data.id)}
              >
                X
              </button>{" "}
            </li>
          ))}
        </ul>
      
    </div>
  );
}

export default TransactionHistory;