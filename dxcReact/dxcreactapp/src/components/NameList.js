import React from 'react'

function NameList() {
    const names = ['priya','shiva','swetha']
    return (
        <div>
            {
                names.map(names =><h2>{names}</h2>)
            }

        </div>
    )
}

export default NameList