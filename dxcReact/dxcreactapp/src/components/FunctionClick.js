import React from 'react'

function FunctionClick() {

    function clickKHandler(){
        console.log('button clicked fc')
    }

    
    return (
        <div>
            <button onClick = {clickKHandler()}>Clickmefc</button>
        </div>
    )
}

export default FunctionClick
