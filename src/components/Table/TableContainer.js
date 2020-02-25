import React from 'react'

const TableContainer = (props) => {
    return (
        <div className="data-table">
            <div className="table-content">{props.children}</div>
        </div>
    )
}

export default TableContainer