import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './components/Pofile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import * as serviceWorker from './serviceWorker';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';



// ReactDOM.render(
//   <FriendList friends={friends} />,
//   document.getElementById('root'),
// );


// ReactDOM.render(
//   <Profile
//     name={user.name}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats} />,
//   document.getElementById('root')
// )



// ReactDOM.render(
//   <Statistics title="Upload stats" stats={statisticalData} />,
//   document.getElementById('root'),
// );


ReactDOM.render(
  <TransactionHistory items={transactions} />,
  document.getElementById('root'),
);



serviceWorker.unregister();