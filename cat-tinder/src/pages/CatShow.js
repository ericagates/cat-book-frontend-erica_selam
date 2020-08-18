import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class CatShow extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3>Cat Show Page!</h3>
            <Footer />
        </React.Fragment>
        )
    }
}

export default CatShow
