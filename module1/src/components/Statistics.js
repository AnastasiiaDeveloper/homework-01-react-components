
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';



function Statistics(props) {
    return (
      <section class="statistics">
        <h2 class="title">{props.title}</h2>
        <ul class="stat-list">
          {props.stats.map(stat =>
            <li class="item">
              <span class="label">{stat.label}</span>
              <span class="percentage">{stat.percentage}</span>
            </li>
          )}
        </ul>
      </section>
    );
  }


  
Statistics.propTypes = {
     title: PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired,
  };


  // export default Statistics