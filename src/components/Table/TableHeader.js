import React from 'react'

const TableHeader = (props) => {
    return (

        <div className="table-header center-middle">
            <h1 className="table-title">{props.title}</h1>

            <div className="options center-middle">               
                {props.children}
            </div>
        </div>
    )
}

export default TableHeader