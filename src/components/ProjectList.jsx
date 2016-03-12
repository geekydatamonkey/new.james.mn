import React from 'react';
import ProjectTile from './ProjectTile';

// data
import projects from '../data/projects';

function renderProjectTiles() {
  return projects.map((project) => (
    <ProjectTile
      key={ project._id }
      project={ project }
    />
  ));
}

const ProjectList = () => (
  <section className="page-section">
    <h2>Projects</h2>
    <ul className="project-list">
      { renderProjectTiles() }
    </ul>
  </section>
);

export default ProjectList;
