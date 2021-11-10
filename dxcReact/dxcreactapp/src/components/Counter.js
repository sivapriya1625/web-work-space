import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increase() {
        /* this.setState({                        //setState method is async --- excuted on a different thred // it will re render the componen
            count: this.state.count + 1

        },
         () => { console.log('call back value', this.state.count) })   //call ack funcion(=>arrow function) --- please excute this function[callback]  only after the state has been set

        console.log(this.state.count)            //console is being written before setState method completes
     */
    this.setState((prevState,props) => ({
        count: prevState.count + props.addvalue

    }))
    console.log(this.state.count)
    }


    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()

    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increaseFive()}>increment</button>

            </div>
        )
    }
}

export default Counter
