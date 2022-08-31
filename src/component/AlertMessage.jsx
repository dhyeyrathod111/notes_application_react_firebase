import React from 'react'

const AlertMessage = props => {
    let alertTypeClass = "alert text-center alert-" + props.responseStatus;
    return (
        <div className={alertTypeClass} role="alert">
            <h6>{props.message}</h6>
        </div>
    )
}

export default AlertMessage
