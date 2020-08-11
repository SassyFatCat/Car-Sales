import React from 'react';
import {addFeature} from '../actions/carActions';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={event => {
        event.preventDefault();
        props.addFeature(props.feature.id);
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect((state) => {
  return {
  }
  }, {addFeature})(AdditionalFeature);
