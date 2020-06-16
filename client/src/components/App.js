import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from 'react-redux'
import Header from './Header'
import Landing from './Landing'
import * as actions from '../actions';



const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div> Survey New</div>;


class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
  }

    render(){
      return (
        <div className="container">
      
        <BrowserRouter>
        <Header> </Header>
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
    </div>);
    }
}

/*const App = () => {
  return (
    <div className="container">
        <Header> </Header>
        <BrowserRouter>
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
    </div>
  );
};*/  

export default connect(null, actions)(App);
