import React from 'react'

const TableHead = (props) => {
    return (
        <thead>
            <tr>
                {props.children}
            </tr>
        </thead>
    )
}

export default TableHead