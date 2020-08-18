import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class CatShow extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3>Cat Show Page!</h3>
            <p>{ this.props.cat.name } is { this.props.cat.age } years old and enjoys, { this.props.cat.enjoys }</p>
            <Footer />
        </React.Fragment>
        )
    }
}

export default CatShow
