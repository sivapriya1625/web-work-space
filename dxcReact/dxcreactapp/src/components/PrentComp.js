import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

 constructor(props) 



/**
 * im setting the state after every 2 secs,
 * but im setting the same value in the name field of the state
 * regular component re renders though the value in the state's name field hasn't changed
 * but a pure component will not re-render --- because it'll do a shallow comparison
 */
 componentDidMount()
    setInterval(() => {
        this.setState({
            name: 'abdul-parentcomnew'
        })
    }, 2000);


 constructor(props)
        return (
            <div>
                Parent component
                <MemoComp name = {this.state.name}/>
               { /* <RegularComp name ={this.state.name}></RegularComp>
        <PureComp name = {this.state.name}></PureComp> */}
            </div>
        )
    

    