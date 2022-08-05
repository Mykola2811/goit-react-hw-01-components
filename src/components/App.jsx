
import { Profile } from './Cart/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend/FriendList';
import { Box } from './Box';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';






export const App = () => {
  return (
    <Box 
      padding={`10px`}
    >
      <Profile cart={user} />
      <Statistics />
      <FriendList />
      <TransactionHistory/>
    </Box>
  );
};
