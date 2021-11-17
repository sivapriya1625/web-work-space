import React, { Component } from 'react'

/**
 * this is a stateless component
 * @returns
 */
function ChildComponent(props){

    
        return (
            <div>
                <button onClick = {() => props.priyaHandler('aryan')}>greet parent</button>
            </div>
        )
    }


export default ChildComponent
