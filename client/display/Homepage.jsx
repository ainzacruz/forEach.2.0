import React, { Component } from 'react';
import Mainstage from '../components/home/Mainstage.jsx';
import Info from '../components/home/Info.jsx';
import TotalDonations from '../components/home/TotalDonations.jsx';
import Payments from '../components/payments/Payments.jsx';
import Login from '../components/login/Login.jsx';
import Navbar from '../components/home/Navbar.jsx';
import Shoutouts from '../components/shoutouts/Shoutouts.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Mainstage />
              <TotalDonations />
            </Route>
            <Route path="/donate" component={Payments} />
            <Route path="/login" component={Login} />
            <Route path="/shoutouts" component={Shoutouts} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Homepage;