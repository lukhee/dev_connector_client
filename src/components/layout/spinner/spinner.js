import React from 'react'
import './spinner.css'

const Spinner = ()=>  {
    return (
        <div className="d-flex justify-content-around">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner
