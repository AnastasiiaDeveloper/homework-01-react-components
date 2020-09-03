
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';



function FriendList(props) {
    return (
      <ul className={props.friends[0].isOnline ? "green" : "red"}>
       <ul className="friend-list"> 
        {props.friends.map(friend =>
          <li className="item">
            <span className="status"></span>
            <img className="avatar" src={friend.avatar} alt="" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        )}
        </ul>
      </ul>
    );
  }

  
FriendList.defaultProps = {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg",
  };
  
  
FriendList.propTypes = {
     avatar: PropTypes.string,
     name: PropTypes.string.isRequired,
  };



  // export default FriendList