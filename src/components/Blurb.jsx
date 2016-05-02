import React, { PropTypes } from 'react';
import defaultImg from '../img/bg-default.png';

function Blurb({ title, alt, img, href }) {
  return (
    <article className="blurb">
      <div classnName="blurb-img-wrap">
        <img
          className="blurb-img"
          src={img || defaultImg}
          alt={alt || title}
        />
      </div>
      <a href={href}>
        <div className="blurb-content">
          <h3 className="blurb-title">
            {title}
          </h3>
          <span className="blurb-link">
            &rarr;
          </span>
        </div>
      </a>
    </article>
  );
}

Blurb.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};

export default Blurb;
