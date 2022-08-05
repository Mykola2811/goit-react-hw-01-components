import PropTypes from 'prop-types';


export const TrItem = ({  type, amount, currency}) => {
    return <TrItem>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </TrItem>
}

TrItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
