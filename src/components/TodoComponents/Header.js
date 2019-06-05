import React from 'react'

function Header(props) {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <input type='text' placeholder='Search For Task' onChange={props.search} />
        </header>
    )
}

const headerStyle = {
    background: 'red',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header