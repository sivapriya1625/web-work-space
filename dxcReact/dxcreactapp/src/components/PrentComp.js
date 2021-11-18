import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

 constructor(props) 
    componentDidMount()
        setInterval(() => {
            this.setState({
                name: 'abdul-parentcomp-memo'
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
    

    