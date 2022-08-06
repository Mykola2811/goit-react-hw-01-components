import transactions from '../../data/transactions.json';
import { TrItem } from './TrItem';
import { Table,Th } from './TransactionHistory.styled';

export const TransactionHistory = () => {
    
    return (<Table className="transaction-history">
  <thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
      </thead>
  <tbody >
    {transactions.map(transactions => (<TrItem key={transactions.id}  items={transactions} />))}
  </tbody>
</Table>);
}

