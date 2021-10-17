import React from 'react'
import styled from 'styled-components'

const CenteredContainer = (props: any) => {
    const {children, styles={}} = props
    return (
        <Container style={{...styles}}>
            {children}
        </Container>
    )
}
const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export default CenteredContainer
