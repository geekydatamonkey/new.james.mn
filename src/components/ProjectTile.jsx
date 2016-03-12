import React, { PropTypes } from 'react';

function getClassNames(project) {
  return [
    'project',
    `project-color-${project.color || 'default'}`,
  ].join(' ');
}

function getSubtitle(project) {
  if (!project.subtitle) return '';
  return (
    <p className="project__subtitle">
      {project.subtitle}
    </p>
  );
}

function ProjectTile({ project }) {
  return (
    <li className={ getClassNames(project) }>
      <h3 className="project__title">{project.title}</h3>
      { getSubtitle(project) }
    </li>
  );
}


ProjectTile.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectTile;
