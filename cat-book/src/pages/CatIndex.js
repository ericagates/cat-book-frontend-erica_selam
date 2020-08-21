import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3>All of the Cats!</h3>
            <ol>
                { this.props.allCats.map((cat, index) => {
                    return (
                        <div key = {index}>
                        <NavLink to= { `/catshow/${ cat.id }` }>
                        <li>{cat.firstName} {cat.lastName}</li>
                        </NavLink>
                        </div>
                    )
                })}
            </ol>
            <Footer />
        </React.Fragment>
        )
    }
}

export default CatIndex
