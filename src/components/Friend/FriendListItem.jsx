import { Li, Span } from './FriendList.styled';
import PropTypes from 'prop-types';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    
  return <Li>
      <Span > 
      </Span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</Li>;
}


FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};