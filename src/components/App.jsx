
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';

import { Box } from './BasicStyle.styled';


export const App = () => {
  return (

    <Box>
      <Profile cart={user} />
      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </Box>
  );
};
