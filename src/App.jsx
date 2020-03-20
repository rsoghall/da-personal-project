import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import About from "./views/About/About";
import ElMonte from "./views/AboutCenter/ElMonte"
// import Sequoia from "./views/AboutCenter/AboutSequoia/Sequoia"
import Calendars from "./views/Calendars/Calendars";
import Careers from "./views/Careers/Careers"
import Centers from "./views/Centers/Centers";
import CentersDashboard from "./views/CentersDashboard/CentersDashboard";
import Contact from "./views/Contact/Contact";
import Corporate from "./views/Corporate/Corporate";
import Events from "./views/Events/Events";
import Forms from "./views/Forms/Forms";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Staff from "./views/Staff/Staff";
import AllStaff from "./views/AllStaff/AllStaff";
import Contract from "./views/Contract/Contract";
import store from "./ducks/store";
import { getCenters, getStaff, getForms } from "./ducks/store";
import "./reset.css";
// import SequoiaLinks from "./views/AboutCenter/AboutSequoia/SequoiaLinks";
// import InfoGrade from "./views/AboutCenter/AboutSequoia/InfoGrade";
// import InfoKinder from "./views/AboutCenter/AboutSequoia/InfoKinder";
// import SummerFun from "./views/AboutCenter/AboutSequoia/SummerFun";
// import NutsBolts from "./views/AboutCenter/AboutSequoia/NutsBolts";
import TiceCreek from "./views/AboutCenter/TiceCreek";

class App extends Component {
  componentDidMount() {
    axios.get("/api/centers").then(centers => {
      store.dispatch(getCenters(centers.data));
    });
    axios.get("/api/staff").then(staff => {
      store.dispatch(getStaff(staff.data));
    });
    axios.get("/api/forms").then(forms => {
      store.dispatch(getForms(forms.data));
    });
    
  }
  render() {
    return (
      <Router>
        <NavBar />
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/aboutcenter/4" component={ElMonte} />
            {/* <Route path="/aboutcenter/8" component={SequoiaLinks} /> */}
            <Route path="/aboutcenter/9" component={TiceCreek} />
            <Route path="/centers/centersdashboard"component={CentersDashboard}/>
            <Route path="/centers/staff/:id" component={Staff} />
            <Route path="/centers/allstaff" component={AllStaff} />
            <Route path="/careers" component={Careers} />
            <Route path="/centers/calendar/:id" component={Calendars} />
            <Route path="/centers/:id" component={Centers} />
            <Route path="/contact/:id" component={Contact} />
            <Route path="/contract/:id" component={Contract} />
            <Route path="/contract/" component={Contract} />
            <Route path="/corporate" component={Corporate} />
            <Route path="/events/:id" component={Events} />
            <Route path="/forms/:id" component={Forms} />
            <Route path="/login" component={Login} />
          </Switch>
          {/* <Switch>
          <Route path="/InfoGrade" component={InfoGrade} />
            <Route path="/InfoKinder" component={InfoKinder} />
            <Route path="/SummerFun" component={SummerFun} />
            <Route path="/NutsBolts" component={NutsBolts} />

          </Switch> */}
        </div>
        <Footer />
      </Router>
    );
  }
}


export default App;
