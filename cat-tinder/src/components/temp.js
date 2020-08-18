import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: true,
      setCollapsed: true
    }
  }
  render (){
    const toggleNavbar = () => setCollapsed(!collapsed)
    let{collapsed, setCollapsed} = this.state
        return (
        <React.Fragment>
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>

          <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Cat Tinder</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/catindex">Show All Cats</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

          <button>
          <NavLink to= {`/`}>Home</NavLink>
          </button>
        </Container>
        </Jumbotron>
        </React.Fragment>
        )
    }
    
}

export default Header
