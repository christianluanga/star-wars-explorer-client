import React from 'react'
import { Spinner } from 'react-bootstrap'
import CenteredContainer from './CenteredContainer'

const Loader = () => {
    return (
        <CenteredContainer>
        <Spinner id="loader-component" style={{fontSize: '2rem'}} animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </CenteredContainer>
    )
}

export default Loader
