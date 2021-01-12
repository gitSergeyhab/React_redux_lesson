import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div>
            <div id="counter">{counter}</div>
            <button className="btn btn-outline-dark" onClick={inc}>INC</button>
            <button className="btn btn-outline-dark" onClick={dec}>DEC</button>
            <button className="btn btn-outline-dark" onClick={rnd}>RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {counter: state}
}

export default connect(mapStateToProps, actions)(Counter);