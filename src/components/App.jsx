
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../user.json';






export const App = () => {
  return (
    <div>
      <Profile cart={user} />
      <Statistics />
      <FriendList/>
      <TransactionHistory  />;
    </div>
  );
};
