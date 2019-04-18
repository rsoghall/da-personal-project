import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import About from './views/About'
import Centers from './views/Centers'
import Corporate from './views/Corporate'
import Events from './views/Events'
import Forms from './views/Forms'
import Home from './views/Home';
import Login from './views/Login'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Staff from './views/Staff'
import store from './ducks/store'
import {getCenters} from './ducks/store'



class App extends Component {

componentDidMount(){
  axios.get('/api/centers').then(centers => {
  store.dispatch(getCenters(centers.data))
  })
}
  render() {
    return (
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/centers/:id' component={Centers}/>
            <Route path='/corporate' component={Corporate}/>
            <Route path='/events' component={Events}/>
            <Route path='/forms' component={Forms}/>
            <Route path='/login' component={Login}/>
            <Route path='/staff/:id' component={Staff}/>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
