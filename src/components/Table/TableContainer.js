import React from 'react'

const TableContainer = (props) => {
    return (
        <div className="data-table">
            <div className="table-content">{props.children}</div>

            <div className="pagination">
                <button className="page-number btn btn-primary btn-small">1</button>
                <button className="page-number btn btn-small">2</button>
                <button className="page-number btn btn-small">3</button>
                <button className="page-number btn btn-small">4</button>
                <button className="page-number btn btn-small">5</button>
            </div>
        </div>
    )
}

export default TableContainer