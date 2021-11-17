import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

/**
 * this parent component is a sateful/content.partition
 */
export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'amarkrish'
        }
        this.greetParent = this.greetParent.bind(this)
    } 

    /**
     * i want to pass the reference of this method as a property to the child
     */

    greetParent(){
        //alert('hello'+this.state.parentName)
        alert('hello ${this.state.parentName}')//string templates-- es6
    }
    
    render() {
        return (
            <div>
                <ChildComponent priyaHandler = {this.greetParent}/>   {/*i am passing the reference of greet parent mrthod to the child*/}
            </div>
        )
    }
}

export default ParentComponent
