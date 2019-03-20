import React, {Component} from 'react'
import {
 BrowserRouter as Router,
 Route
} from 'react-router-dom'

// TODO import the 'react-router-dom'
// TODO use the BrowserRouter as the Router

import TabDash from "./components/TabDash";
import FormForm from "./components/FormForm";

export default class Routes extends Component {
 render() {
   return (
     <Router>
       <div className='pageOutline'>
         <Route exact path="/" component={TabDash}/>
         <Route path="/form" component={FormForm}/>
       </div>
     </Router>
   )
 }
}
