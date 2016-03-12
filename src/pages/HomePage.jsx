import React from 'react';
import ProjectList from '../components/ProjectList';
import '../styles/main.scss';
import navIcon from '../img/icon-menu.svg';

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
      <header className="page-header">
        <nav className="main-nav">
          <img src={navIcon} />
        </nav>
        <h1>James Johnson</h1>
        <ul>
          <li>Teacher</li>
          <li>Developer</li>
          <li>Data Geek</li>
        </ul>
      </header>
      <ProjectList />
      <section className="page-section section-profile"
        dangerouslySetInnerHTML={ getHTML(profile) }
      />
      <footer className="page-footer">
        <p>copyright { getCurrentYear() }</p>
        <ul className="social-media">
          <li><i className="fa fa-github"></i></li>
          <li><i className="fa fa-twitter"></i></li>
          <li><i className="fa fa-linkedin"></i></li>
          <li><i className="fa fa-envelope"></i></li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
