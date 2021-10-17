import React from 'react'

import styled from 'styled-components'
//@ts-ignore
import { Link } from '@reach/router';
import CenteredContainer from './CenteredContainer';

const Error = ({source = 'other'}) => {
    sessionStorage.removeItem('page')
    return (
        <CenteredContainer>
            <Err data-testid="error">
                Oops! something went wrong
            </Err>
            {
                source !== 'home' && <LinkWrapper>
                <Link style={{textDecoration: 'none'}} to="/">Go back home</Link>
                </LinkWrapper>
            }
            
        </CenteredContainer>
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
export default Error
