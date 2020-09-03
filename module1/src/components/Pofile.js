import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';


function Profile(props) {
    return (
      <div class="profile">
        <div class="description">
          <img
            src={props.avatar}
            alt="user avatar"
            class="avatar"
          />
          <p class="name">{props.name}</p>
          <p class="tag">{props.tag}</p>
          <p class="location">{props.location}</p>
        </div>
  
        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{props.stats.followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{props.stats.views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    )
  };
  

  Profile.defaultProps = {
    imgUrl:
    "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  };
  
  
Profile.propTypes = {
     imgUrl: PropTypes.string,
     name: PropTypes.string.isRequired,
     tag: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
  };

  // export default Profile;