import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import persian_cat from '../assets/persian_cat.jpg'

class Home extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3> Home Page! </h3>
            <img src = {persian_cat} alt="grey persian cat" className = "cat" />
            <Footer />
        </React.Fragment>
        )
    }
}

export default Home
