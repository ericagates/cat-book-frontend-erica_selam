import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import persian_cat from '../assets/persian_cat.jpg'
import { Container } from 'reactstrap'

class Home extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3> Welcome to CatBook! </h3>
            <h4>A place to meet all of your furry feline friends!</h4>
            <img src = {persian_cat} alt="grey persian cat" className = "cat" width="50%"/>
            <Footer />
        </React.Fragment>
        )
    }
}

export default Home
