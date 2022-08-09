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
        {transactions.map(({id,type,amount,currency}) => (
          <tr key={id} >
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
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

