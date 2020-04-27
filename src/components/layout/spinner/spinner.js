import React from 'react'
import './spinner.css'
import styled from 'styled-components'

const LoadingDiv = styled.div`
    /* width: 100vw; */
    height: 100vh;
`

const Spinner = ()=>  {
    return (
        <LoadingDiv className="d-flex justify-content-around align-items-center">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </LoadingDiv>
    )
}

export default Spinner
