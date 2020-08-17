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
            cats: mockCats
          }
      

    }
    //  we need to import mockCats data into CatIndex component by passing prop
    render (){
        return (
        <React.Fragment>
            <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/catindex" component = { CatIndex} />
                <Route path="/catshow/:id" component={ CatShow } />
                <Route path="/catnew" component={ CatNew } />
                <Route path="/catedit/:id" component={ CatEdit } />
                <Route component={ NotFound }/>
            </Switch>
        </Router>

        </React.Fragment>
        )
    }
}

export default App;
