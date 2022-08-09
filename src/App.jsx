import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import About from "./views/About/About";
import ElMonte from "./views/AboutCenter/ElMonte"
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
import Staff from "./views/Staff/Staff";
import AllStaff from "./views/AllStaff/AllStaff";
import Contract from "./views/Contract/Contract";
import store from "./ducks/store";
import { getCenters, getStaff, getForms } from "./ducks/store";
import "./reset.css";
import TiceCreek from "./views/AboutCenter/TiceCreek";
/* import Corona from "./views/Corona/Corona"; */
import RegForms from "./views/RegForms/RegForms";
import BancroftCal from "./views/Calendars/BancroftCal"
import TiceCreekCal from "./views/Calendars/TiceCreekCal"
import ElMonteCal from "./views/Calendars/ElMonteCal"
import MonteGardensCal from "./views/Calendars/MonteGardensCal"
import SequoiaCal from "./views/Calendars/SequoiaCal"
import AyersCal from "./views/Calendars/AyersCal"
import HighlandsCal from "./views/Calendars/HighlandsCal"
import PleasantHillCal from "./views/Calendars/PleasantHillCal"
import WestWoodCal from "./views/Calendars/WestWoodCal"
import ayersHome from "./views/Home/ayersHome"
import bancroftHome from "./views/Home/bancroftHome"
import deltaviewHome from "./views/Home/deltaviewHome"
import elmonteHome from "./views/Home/elmonteHome"
import highlandsHome from "./views/Home/highlandsHome"
import montegardensHome from "./views/Home/montegardensHome"
import pleasanthillHome from "./views/Home/pleasanthillHome"
import sequoiaHome from "./views/Home/sequoiaHome"
import ticecreekHome from "./views/Home/ticecreekHome"
import westwoodHome from "./views/Home/westwoodHome"


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
            <Route path="/centers/calendar/1" component={AyersCal} />
            <Route path="/centers/calendar/2" component={BancroftCal} />
            <Route path="/centers/calendar/4" component={ElMonteCal} />
            <Route path="/centers/calendar/5" component={HighlandsCal} />
            <Route path="/centers/calendar/6" component={MonteGardensCal} />
            <Route path="/centers/calendar/7" component={PleasantHillCal} />
            <Route path="/centers/calendar/8" component={SequoiaCal} />
            <Route path="/centers/calendar/9" component={TiceCreekCal} />
            <Route path="/centers/calendar/10" component={WestWoodCal} />
            <Route path="/RegForms" component={RegForms} />

            <Route path="/ayersHome" component={ayersHome} />
            <Route path="/bancroftHome" component={bancroftHome} />
            <Route path="/deltaviewHome" component={deltaviewHome} />
            <Route path="/elmonteHome" component={elmonteHome} />
            <Route path="/highlandsHome" component={highlandsHome} />
            <Route path="/montegardensHome" component={montegardensHome} />
            <Route path="/pleasanthillHome" component={pleasanthillHome} />
            <Route path="/sequoiaHome" component={sequoiaHome} />
            <Route path="/ticecreekHome" component={ticecreekHome} />
            <Route path="/westwoodHome" component={westwoodHome} />

            <Route path="/about" component={About} /> 
            <Route path="/aboutcenter/4" component={ElMonte} />
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
        </div>
        {/* <Footer /> */}
      </Router>
    );
  }
}


export default App;
