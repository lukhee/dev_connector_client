import React, { Fragment } from 'react'

const NOTFOUND = () => {
    return (
        <Fragment>
            <h3 className="text-center font-weight-bold text-danger"> 
            <i className=" fas fa-exclamation-triangle" /> Not Found </h3>
            <p className="text-center"> Sorry, this page doesn't exist </p>
        </Fragment>
    )
}

export default NOTFOUND