import React from 'react'
import {connect} from 'react-redux'   //  import connect

// attach store states to props
const mapStateToProps = store => {
    return store
}

// attch store action to props
const mapDispathToProps = dispatch => {
    return {
        buyball : () => {
            return dispatch({type : 'buy_ball'})
        },
        sellball : () => {
            return dispatch({type : 'sell_ball'})
        }
    }
}

function Ball(props) {     // props(redux)
    return (
        <div>
            <h1>number of balls {props.balls}</h1>
            <button onClick={props.buyball}>buy balls</button>
            <button onClick={props.sellball}>sell balls</button>
        </div>
    )
}



export default connect(mapStateToProps,mapDispathToProps)(Ball)
