import React from 'react';
import {connect} from 'react-redux';
import {remFeature} from '../actions/carActions';

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={event => {
        event.preventDefault();
        props.remFeature(props.feature.id);
      }} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect((state) => {}, {remFeature})(AddedFeature);
