export const Cart = ({ cart: { username, tag, location, avatar} }) => {
    return <div class="profile">
  <h1>{username}</h1>
</div>;
}

// Cart.propTypes = {
//     user: PropTypes.exact({
//         username: PropTypes.string,
//         tag: PropTypes.string,
//         location: PropTypes.string,
//         avatar: PropTypes.string,
//         stats: PropTypes.exact({
//             followers: PropTypes.string,
//             views: PropTypes.value,
//             likes: PropTypes.value,
//         })
//     })
// }