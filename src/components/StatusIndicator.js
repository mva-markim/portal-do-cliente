import React from 'react'

const getStatusColor = (status) => {
    if (status === 'Pendente')
        return 'waiting'
    if (status === 'Concluído')
        return 'success'

}

const StatusIndicator = (props) => {
    return (
        <div className={`status-indicator ${getStatusColor(props.status)} `}><span></span>{props.status}</div>
    )
}

export default StatusIndicator