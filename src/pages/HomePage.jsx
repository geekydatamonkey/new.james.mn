import React from 'react';
import ProjectList from '../components/ProjectList';
import '../styles/main.scss';
import navIcon from '../img/icon-menu.svg';

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
      <footer className="page-footer">
      </footer>
    </div>
  );
}

export default HomePage;
