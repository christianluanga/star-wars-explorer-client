import React from 'react'
import styled from 'styled-components'
//@ts-ignore
import { Link } from '@reach/router';

const Error = ({source = 'other'}) => {
    sessionStorage.removeItem('page')
    return (
        <Container>
            <Err>
                Ooop! Something went wrong
            </Err>
            {
                source !== 'home' && <LinkWrapper>
                <Link style={{textDecoration: 'none'}} to="/">Go back home</Link>
                </LinkWrapper>
            }
            
        </Container>
    )
}


const Err = styled.div`
    font-size: 24px;
    color: red;
    margin-right: 1rem;

`
const LinkWrapper = styled.div`
font-size: 24px;
`
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Error
