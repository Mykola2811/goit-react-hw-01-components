import { Table, Th, Td } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    return (<Table className="transaction-history">
  <thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
      </thead>
  <tbody >
        {transactions.map(transactions => (
          <tr key={transactions.id} >
            <Td>{transactions.type}</Td>
            <Td>{transactions.amount}</Td>
            <Td>{transactions.currency}</Td>
          </tr>))
        }
  </tbody>
</Table>);
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

