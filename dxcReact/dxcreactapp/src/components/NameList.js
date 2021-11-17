import React from 'react'

function NameList() {
    const names = ['priya', 'shiva', 'swetha', 'dxc','react']
    const NameList = names.map(names => <h2>{names}</h2>)
    return (
        <div>{NameList}</div>
    )
}

export default NameList
