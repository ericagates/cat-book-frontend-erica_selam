import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class CatEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
            firstName: "",
            lastName:"",
            age: "",
            enjoys: ""
            },
            success: false
        }
    }
      
      handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
      }

      handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        // a function call being passed from App.js
        this.props.editCat(this.state.form, this.props.cat.id)
        // update success to true
        this.setState({ success: true })
      }
    
    render (){
        return (
        <React.Fragment>
             <Header />
            <h3> Cat Edit Page! </h3>
            <Form>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                    type="text"
                    name="firstName"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                    type="text"
                    name="lastName"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Age</Label>
                    <Input
                    type="number"
                    name="age"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enjoys</Label>
                    <Input
                    type="text"
                    name="enjoys"
                    />
                </FormGroup>
                <Button
                name="submit"
                color="secondary"
                onClick={ this.handleSubmit }
                >
                Submit Updates
                </Button>
            </Form>
            <Footer />
            { this.state.success && <Redirect to={ `/catshow/${this.props.cat.id}` }/> }
        </React.Fragment>
        )
    }
}

export default CatEdit
