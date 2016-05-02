import React from 'react';
import '../styles/main.scss';
import blurbImg from '../img/bg-deptofcc.png';

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
        <section className="page-section">
          <h2 className="section-title">Work</h2>
          <article className="blurb">
            <img
              className="blurb-img"
              src={blurbImg}
              alt="smeared out website"
            />
            <div className="blurb-content">
              <h3 className="blurb-title">
                Dept. of Creative Caffeination
              </h3>
              <a className="blurb-link" href="#!">
                &rarr;
              </a>
            </div>
          </article>
        </section>
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

export default HomePage;
