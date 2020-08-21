import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { NavLink } from 'react-router-dom'
import {Button} from 'reactstrap'

class CatShow extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3>This is { this.props.cat.firstName } { this.props.cat.lastName }!</h3>
            <p>{ this.props.cat.firstName } { this.props.cat.lastName } is { this.props.cat.age } years old and enjoys, { this.props.cat.enjoys }</p>
            <NavLink
                to={`/catedit/${this.props.cat.id}`}
            >
            <Button color="secondary">
            Edit Cat Profile
            </Button>
            </NavLink>
            <Footer />
        </React.Fragment>
        )
    }
}

export default CatShow
