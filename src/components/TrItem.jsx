export const TrItem = ({ transaction: { type, amount, currency } }) => {
    console.log(type)
    return <TrItem>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </TrItem>
}