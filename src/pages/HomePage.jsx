import React from 'react';
import ProjectList from '../components/ProjectList';
import '../styles/main.scss';
import navIcon from '../img/icon-menu.svg';
import headshot from '../img/headshot_2016_transparent.png';

// data
import profile from 'html!markdown!../data/profile.md';

function getCurrentYear() {
  return (new Date()).getFullYear();
}

function getHTML(str) {
  return { __html: str };
}

function HomePage() {
  return (
    <div className="container">
      <nav className="main-nav">
        <img src={navIcon} />
      </nav>
      <header className="page-header">
        <img className="headshot" src={headshot} />
        <div className="page-header__contents">
          <h1>
            <span>James</span>
            <span>Johnson</span>
          </h1>
          <ul>
            <li>Developer</li>
            <li>Teacher</li>
            <li>Data Geek</li>
          </ul>
        </div>
      </header>
      <ProjectList />
      <section className="page-section section-profile"
        dangerouslySetInnerHTML={ getHTML(profile) }
      />
      <footer className="page-footer">
        <p>copyright { getCurrentYear() }</p>
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

export default HomePage;
