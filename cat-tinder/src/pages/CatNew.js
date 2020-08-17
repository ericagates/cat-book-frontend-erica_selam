import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class CatNew extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3> Cat New Page! </h3>
            <Footer />
        </React.Fragment>
        )
    }
}

export default CatNew
