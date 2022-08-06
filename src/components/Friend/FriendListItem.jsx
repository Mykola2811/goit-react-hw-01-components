import { Li, Span, Img } from './FriendList.styled';
import PropTypes from 'prop-types';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    
  return <Li>
      <Span selected={isOnline === true}> </Span>
  <Img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</Li>;
}


FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};