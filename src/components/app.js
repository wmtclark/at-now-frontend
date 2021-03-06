import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import YouTube from './youtube';
import '../style.scss';
import Controls from './controls';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
        <li><NavLink to="/youtube" exact>YouTube</NavLink></li>
      </ul>
    </nav>
  );
};
const About = (props) => {
  return (<div><Controls /> </div>);
};
const Welcome = (props) => {
  return (<div><Controls /></div>);
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route exact path="/youtube" component={YouTube} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
