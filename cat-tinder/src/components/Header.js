import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar = () => {
    let {collapsed} = this.state
    if (collapsed === true){
      this.setState({collapsed: false})
    } else {
      this.setState({collapsed: true})
    }
  }
  render (){
    let{collapsed} = this.state
    // TypeError: setCollapsed is not a function
   
        return (
        <React.Fragment>
          <div>
      <Navbar color="faded" light >
        <NavbarBrand href="/" className="mr-auto">CatBook!</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="text-right">
          <NavItem>
              <NavLink to= {`/`}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to= {`/catindex`}>Show All Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to= {`/catnew`}>Add A Cat</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
        </React.Fragment>
        )
    }
    
}

export default Header
