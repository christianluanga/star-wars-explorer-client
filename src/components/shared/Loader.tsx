import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Loader = () => {
    return (
        <Container>
        <Spinner style={{fontSize: '2rem'}} animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Loader
