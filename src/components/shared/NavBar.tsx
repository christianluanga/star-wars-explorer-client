import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const MyNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav style={{paddingLeft: '10rem', fontSize: '2rem'}}>
          <Nav.Link href="/" onClick={()=> sessionStorage.removeItem('page')}>Home</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default MyNavBar
