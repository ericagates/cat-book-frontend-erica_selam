import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

class Header extends Component {
    render (){
        return (
        <React.Fragment>
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
        </Jumbotron>
        </React.Fragment>
        )
    }
}

export default Header
