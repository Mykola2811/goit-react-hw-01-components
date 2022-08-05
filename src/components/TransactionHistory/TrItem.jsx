import PropTypes from 'prop-types';

export const TrItem = ({ transaction: { type, amount, currency } }) => {
    return <TrItem>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </TrItem>
}

TrItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};