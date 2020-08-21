import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import './App.css'
import CatIndex from './pages/CatIndex' 
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import mockCats from './mockCats.js'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cats: []
        }

    }

    componentDidMount(){
        fetch("http://localhost:3000/cats").then(response => {
            if(response.status === 200){
                return(response.json())
            }
        }).then(catsArray => {
            this.setState({ cats: catsArray })
        }).catch(errors => {
            console.log("index errors", errors)
        })
    }

    createNewCat = (newCat) => {
        return fetch("http://localhost:3000/cats", {
            body: JSON.stringify(newCat),
            headers: { "Content-Type": "application/json" },
            method: "POST"
        }).then(response => {
            if(response.status === 200){
                this.componentDidMount()
            } else {
                alert("Please check your form")
            }
            return response
        }).catch(errors => {
            console.log("create errors", errors)
        })
    }

    editCat = (editcat, id) => {
        return fetch(`http://localhost:3000/cats/${id}`, {
            // converting an object to a string
            body: JSON.stringify(editcat),
            // specify the info being sent in JSON and the info returning should be JSON
            headers: {"Content-Type": "application/json"},
            // HTTP verb so the correct endpoint is invoked on the server
            method: "PATCH"
        }).then(response => {
            // if the response is good  - reload the cats
            if(response.status === 200){ this.componentDidMount()}
            return response
        }).catch(errors => {
            console.log("edit errors", errors)
        })
    }

    deleteCat = (id) => {
        console.log("deletedCatID: ", id)
        return fetch(`http://localhost:3000/cats/${id}`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "DELETE"
        })
        .then(response => {
          if(response.status === 200){
            this.componentDidMount()
          }else {
            alert("Not successfully deleted")
        }
        return response
          
        })
        .catch(errors => {
          console.log("delete errors:", errors)
        })
      }

    render (){
        let {cats} = this.state
        return (
        <React.Fragment>
            <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/catindex" render = { (props) => < CatIndex allCats={cats} />  } 
                
                />
                <Route path="/catshow/:id" 
                render={(props)=> {
                    let id = props.match.params.id
                    let cat = cats.find(cat => cat.id === parseInt(id))
                    return ( 
                    <CatShow cat = { cat } deleteCat={ this.deleteCat }/>
                    )
                    }}
                />                    
                <Route path="/catnew"
                render={(props) => 
                    <CatNew createNewCat = { this.createNewCat }/>
                }                />
                <Route
                    exact path={"/catedit/:id"}
                    render={ (props) => {
                        let id = props.match.params.id
                        let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                        return(
                        <CatEdit
                            editCat={ this.editCat }
                            cat={ cat }
                        />
                        )
                    }}
                />
                <Route component={ NotFound }/>
            </Switch>
        </Router>

        </React.Fragment>
        )
    }
}

export default App;
