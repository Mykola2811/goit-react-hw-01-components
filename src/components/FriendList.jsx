import { Wrapper,Ul } from './styled/FriendList.styled';
import friends from '../friends.json';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
    
  return <Wrapper >
      <Ul >
          {friends.map(friends => (<FriendListItem key={friends.id}  friend={friends} />))}
      </Ul>
</Wrapper>;
}