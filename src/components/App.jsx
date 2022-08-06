
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend/FriendList';
import { Box } from './BasicStyle.styled';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';






export const App = () => {
  return (

    <Box>
      <Profile cart={user} />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </Box>
  );
};
