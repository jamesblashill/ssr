import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom'
import s from './styles.css';

const App = () => (
  <AppLayout>
    <Switch>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <Route component={Home}/>
    </Switch>
  </AppLayout>
)

const AppLayout = ({children}) => (
  <div className={s.appLayout}>
    <Link to="/">Home</Link>
    <Link to="/page1">Page1</Link>
    <Link to="/page2">Page2</Link>
    {...children}
  </div>
)

const Home = () => (
  <h1>Hello world 2!</h1>
);

const Page1 = () => (
  <h1>Page1</h1>
);

const Page2 = () => (
  <h1>Page2</h1>
);

export default App;
