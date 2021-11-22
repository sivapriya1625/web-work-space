import React, { Component } from 'react'

export class CounterTwo extends Component {


    reducer = (state, action) => {
        switch (action.type) {

            case 'increment': return { firstCounter: state.firstCounter + action.value }
            case 'decrement': return { firstCounter: state.firstCounter - action.value }
            case 'reset': return initialState
            default: return state
        }
    }
}
                   
              
           
           

export default CounterTwo
