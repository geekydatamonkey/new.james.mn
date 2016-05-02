import React, { PropTypes } from 'react';
import BlurbCollection from '../components/BlurbCollection';
import '../styles/main.scss';
import siteData from '../data/siteData';

const { workCollection } = siteData;

function HomePage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>
          <span className="line">Hi.</span>
          <span className="line">I'm James.</span>
          <span className="line">I make things.</span>
        </h1>
      </header>
      <main>
        <BlurbCollection title="Work" collection={workCollection} />
      </main>
      <footer className="page-footer">
        <ul className="social-media">
          <li><a href="#!"><i className="fa fa-github"></i></a></li>
          <li><a href="#!"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#!"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="#!"><i className="fa fa-envelope"></i></a></li>
        </ul>
      </footer>
    </div>
  );
}

HomePage.propTypes = {
  workCollection: PropTypes.array.isRequired,
};

export default HomePage;
