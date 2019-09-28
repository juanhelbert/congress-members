import React from 'react';
import Link from 'react-router-dom/Link';
import './Home.scss';

const Home = () => (
  <div className='page home'>
    <div className='container'>
      <div className='welcome-wrapper'>
        <span className='title'>
          Welcome to Congress Members
        </span>
        <p>
          The app which lists the members of the congress and offers you the possibility of filter them, know their social networks and contact them
        </p>
        <Link to='/members'>Let's go <i className='arrow'/></Link>
      </div>
    </div>
  </div>
);

export default Home;