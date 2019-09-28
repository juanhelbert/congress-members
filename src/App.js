import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Members from './Pages/Members/Members';
import Footer from './Atoms/Footer/Footer';
import Header from './Atoms/Header/Header';
import Home from './Pages/Home/Home';
import React from 'react';
import './Styles/App.scss';

const App = () => (
  <Router>
    <Header />
    <div className='page-container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/members' component={Members} />
      </Switch>
    </div>
    <Footer />
  </Router>
);
export default App;