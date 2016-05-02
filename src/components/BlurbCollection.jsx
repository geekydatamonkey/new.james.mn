import React, { PropTypes } from 'react';
import Blurb from './Blurb';

function renderCollection(collection) {
  return collection.map((blurb) => {
    const { id, ...other } = blurb;
    return <Blurb key={id} {...other} />;
  });
}

const BlurbCollection = ({ title, collection }) => (
  <section className="page-section blurb-section">
    <h2 className="section-title">{title}</h2>
    {renderCollection(collection)}
  </section>
);

BlurbCollection.propTypes = {
  title: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
};

export default BlurbCollection;
