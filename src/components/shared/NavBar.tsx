import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav style={{paddingLeft: '10rem', fontSize: '2rem'}}>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default MyNavBar
