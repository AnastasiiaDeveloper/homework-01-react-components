

import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';




function TransactionHistory(props) {
    return (
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map(item =>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  
TransactionHistory.propTypes = {
     type: PropTypes.string.isRequired,
     amount: PropTypes.number.isRequired,
     currency: PropTypes.string.isRequired,
  };



  export default TransactionHistory