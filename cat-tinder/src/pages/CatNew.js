import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                firstName: "",
                lastName: "",
                age: "",
                enjoys:""
            },
            success: false
        }
    }

    //create a handleChange method
    handleChange = (e) => {
        let {form} = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    //create a handleSubmit method
    handleSubmit = () => {
        this.props.createNewCat(this.state.form)
        this.setState({success: true})
    }

    render (){
        return (
        <React.Fragment>
            <Header />
            <h3> Cat New Page! </h3>
            <Form>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input 
                    type = "text"
                    name = "firstName"
                    onChange = { this.handleChange }
                    value = { this.state.form.firstName }
                     />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input 
                    type = "text"
                    name = "lastName"
                    onChange = { this.handleChange }
                    value = { this.state.form.lastName } />
                </FormGroup>
                <FormGroup>
                    <Label>Age</Label>
                    <Input 
                    type = "number"
                    name = "age"
                    onChange = { this.handleChange }
                    value = { this.state.form.age } />
                </FormGroup>
                <FormGroup>
                    <Label>Enjoys</Label>
                    <Input 
                    type = "text"
                    name = "enjoys"
                    onChange = { this.handleChange }
                    value = { this.state.form.enjoys } />
                </FormGroup>
                <Button 
                name="submit"
                color = "secondary"
                onClick = {this.handleSubmit}>
                    Submit
                </Button>
            </Form>
            <Footer />
        { this.state.success && <Redirect to = "/catindex" /> }
        </React.Fragment>
        )
    }
}

export default CatNew
