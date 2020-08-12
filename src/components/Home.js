import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeCar} from '../actions/carActions';

const Home = (props) => {

const history = useHistory();
const handleRoute = event => {
history.push(`/${event.target.id}`)
props.changeCar(event.target.id)
}

    return (
        <div>
            <h1>SHOP</h1>
            <div id='mustang' onClick={handleRoute} style={{border: '2px solid black', backgroundColor: 'black', color: 'white', margin: '10%'}}>Ford Mustang</div>
            <div id='corvette' onClick={handleRoute} style={{border: '2px solid black', backgroundColor: 'black', color: 'white', margin: '10%'}}>Chevrolet Corvette</div>
            <div id='corolla' onClick={handleRoute} style={{border: '2px solid black', backgroundColor: 'black', color: 'white', margin: '10%'}}>Toyota Corolla</div>
        </div>
    )
}

export default connect((state) => {
return {}
}, {changeCar})(Home);