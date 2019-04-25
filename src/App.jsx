import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import About from './views/About/About'
import Centers from './views/Centers/Centers'
import CentersDashboard from './views/CentersDashboard/CentersDashboard'
import Corporate from './views/Corporate/Corporate'
import Events from './views/Events/Events'
import Forms from './views/Forms/Forms'
import Home from './views/Home/Home';
import Login from './views/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Staff from './views/Staff/Staff'
import store from './ducks/store'
import { getCenters, getStaff } from './ducks/store'
import './reset.css'



class App extends Component {

componentDidMount(){
  axios.get('/api/centers').then(centers => {
    store.dispatch(getCenters(centers.data))
  })
  axios.get('/api/staff').then(staff => {
    store.dispatch(getStaff(staff.data))
    })
}
  render() {
    return (
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/centers/centersdashboard' component={CentersDashboard}/>
            <Route path='/centers/staff/:id' component={Staff}/>
            <Route path='/centers/:id' component={Centers}/>
            <Route path='/corporate' component={Corporate}/>
            <Route path='/events' component={Events}/>
            <Route path='/forms/:id' component={Forms}/>
            <Route path='/login' component={Login}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
