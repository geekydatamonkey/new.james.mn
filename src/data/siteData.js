/* eslint global-require: "warn" */

import uuid from 'node-uuid';

function generateId(item) {
  return Object.assign(item, { id: uuid.v4() });
}

const siteData = {
  workCollection: [
    {
      title: 'Dept. of Creative Caffeination',
      img: require('../img/bg-deptofcc.png'),
      href: 'http://deptofcreativecaffeination.com',
    },
    {
      title: 'Web Tree',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment10-final/',
    },
    {
      title: 'Spacial Warping',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment7c/',
    },
    {
      title: 'Gravity Sandbox',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment7/',
    },
    {
      title: 'Waves 2',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/exercise6/',
    },
    {
      title: 'Harmonigraph',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment5b/',
    },
    {
      title: 'Time System ',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment4/',
    },
    {
      title: 'Evolving Text',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment3/',
    },
    {
      title: 'Wave Equation',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment2.1/',
    },
    {
      title: 'WASD in p5js',
      href: 'http://jjohnson136.studio.mcad.edu/exd-projects/assignment1/',
    },
  ],
};

siteData.workCollection.forEach(generateId);

export default siteData;
