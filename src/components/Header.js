import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Header = props => {
const history = useHistory();

  return (
    <>
      <button onClick={event => {
        event.preventDefault();
        history.push('/');
      }}>Back</button>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default connect((state) => {
return {
  car: state.car
}
}, {})(Header);
