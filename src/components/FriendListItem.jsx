import { Li, Span } from './styled/FriendList.styled';


export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
    
  return <Li>
      <Span > 
      </Span>
  <img src={avatar} alt="User avatar" width="48" />
  <p>{name}</p>
</Li>;
}