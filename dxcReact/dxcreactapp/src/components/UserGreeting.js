import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let Message
        if(this.state.isLoggedIn){
            Message = <div>welcome priya</div>
        }
        else{
            Message = <div>welcome guest</div>
        }
        return <div>{Message}</div>
        /* if(this.state.isLoggedIn){
            return <div>welcome priya</div>
        }
        else{
            return <div>welcome guest</div>
        } */
        /* return (
            <div>
                <div>welcome abdul</div>
                <div>welcome guest</div>
                
            </div>
        ) */
    }
}

export default UserGreeting
