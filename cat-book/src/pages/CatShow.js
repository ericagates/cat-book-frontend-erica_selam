import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { NavLink } from 'react-router-dom'
import {Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatShow extends Component {

    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }
    handleClick = (e) => {
        // a function call being passed from App.js
        this.props.deleteCat(this.props.cat.id)

        // update success to true
        this.setState({ success: true })
        console.log("Insdie of handleclick method now!")
    }
    
    render (){
        return (
        <React.Fragment>
            <Header />
            <h3>This is { this.props.cat.firstName } { this.props.cat.lastName }!</h3>
            <p>{ this.props.cat.firstName } { this.props.cat.lastName } is { this.props.cat.age } years old and enjoys, { this.props.cat.enjoys }</p>
            <NavLink
                to={`/catedit/${this.props.cat.id}`}
            >
            <Button color="primary">
            Edit Cat Profile
            </Button>
            </NavLink>
            <br/>
            <br/>
            
            <Button color="secondary" onClick ={ this.handleClick }>
               Delete Cat Profile
            </Button>
            

            <br/>
            <NavLink to= {`/catindex`}>
            Show all cats
            </NavLink>

            <Footer />
            { this.state.success && <Redirect to={ `/catindex` }/> }
        </React.Fragment>
        )
    }
}

export default CatShow
