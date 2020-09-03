
// import React from 'react';
// import PropTypes from 'prop-types';
// import './App.css';



// function Profile(props) {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img
//           src={props.avatar}
//           alt="user avatar"
//           class="avatar"
//         />
//         <p class="name">{props.name}</p>
//         <p class="tag">{props.tag}</p>
//         <p class="location">{props.location}</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">{props.stats.followers}</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">{props.stats.views}</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">{props.stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   )
// }

// function Statistics(props) {
//   return (
//     <section class="statistics">
//       <h2 class="title">{props.title}</h2>
//       <ul class="stat-list">
//         {props.stats.map(stat =>
//           <li class="item">
//             <span class="label">{stat.label}</span>
//             <span class="percentage">{stat.percentage}</span>
//           </li>
//         )}
//       </ul>
//     </section>
//   );
// }

// function FriendList(props) {
//   return (
//     <ul className={props.friends[0].isOnline ? "green" : "red"}>
//      <ul className="friend-list"> 
//       {props.friends.map(friend =>
//         <li className="item">
//           <span className="status"></span>
//           <img className="avatar" src={friend.avatar} alt="" width="48" />
//           <p className="name">{friend.name}</p>
//         </li>
//       )}
//       </ul>
//     </ul>
//   );
// }

// function TransactionHistory(props) {
//   return (
//     <table class="transaction-history">
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.items.map(item =>
//           <tr>
//             <td>{item.type}</td>
//             <td>{item.amount}</td>
//             <td>{item.currency}</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// }

// export default Profile
// export default Statistics
// export default FriendList
// export default TransactionHistory






