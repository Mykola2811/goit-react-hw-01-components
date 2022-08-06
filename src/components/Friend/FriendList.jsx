import { Wrapper,Ul } from './FriendList.styled';
import friends from '../../friends.json';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = () => {
    
  return <Wrapper >
      <Ul >
          {friends.map(friends => (<FriendListItem key={friends.id}  friend={friends} />))}
      </Ul>
</Wrapper>;
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
