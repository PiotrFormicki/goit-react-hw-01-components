import user from '../../data/user.json'
import dataStatisctic from '../../data/data.json'
import friends from '../../data/friends.json'
import transactions from '../../data/transactions.json'

import Profile from '../Profile/Profile';
import SectionStatictic from '../SectionStatistic/SectionStatistic';
import FriendsList from '../FriendsList/FriendsList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';


// import css from './App.module.css'

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <SectionStatictic
        stats={dataStatisctic}
      />

      <FriendsList
        friends={friends}
      />

      <TransactionHistory
        transactions={transactions}
      />
    </div>
  );
};

export default App;
