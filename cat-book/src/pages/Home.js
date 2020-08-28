import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import butterfly_cat from '../assets/butterfly_cat.jpg'
import { Container } from 'reactstrap'

class Home extends Component {
    render (){
        return (
        <React.Fragment>
            <div className = "d-flex flex-column">
            <Header />
            <h3 className='text-center'> 
            <strong>Welcome to CatBook!</strong>
            </h3>
            <h4 className='text-center'>A place to meet all of your furry feline friends!</h4>
            <br/>
            <img src = {butterfly_cat} alt="grey persian cat" className = "cat" />
            <Footer />
            </div>
        </React.Fragment>
        )
    }
}

export default Home
