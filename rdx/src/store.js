import {createStore} from 'redux'  

// 1. initialize all your states
let initialState = {
    balls : 5
}

// create your reducers for each state.
// this reducer will handle all n types of changes
function BallReducer(state = initialState, action){
    switch(action.type){        // updates your store by changing states (like setState)
        case 'buy_ball' : return {
            balls : state.balls - 1
        }
        case 'sell_ball' : return {
            balls : state.balls + 1
        }
        default : return initialState
    }
}

// 3. create your store which storing all your reducers.
const store = createStore(BallReducer)

export default store