import transactions from '../transactions.json';
import { TrItem } from './TrItem';

export const TransactionHistory = () => {
    
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody >
    {transactions.map(transactions => (<TrItem key={transactions.id}  transaction={transactions} />))}
  </tbody>
</table>;
}

