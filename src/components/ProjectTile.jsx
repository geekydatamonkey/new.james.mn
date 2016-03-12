import React, { PropTypes } from 'react';

function getClassNames(project) {
  return [
    'project-tile',
    `project-tile--color-${project.color || 'default'}`,
  ].join(' ');
}

function getSubtitle(project) {
  if (!project.subtitle) return '';
  return (
    <p className="project-tile__subtitle">
      {project.subtitle}
    </p>
  );
}

function ProjectTile({ project }) {
  return (
    <li className={ getClassNames(project) }>
      <h3 className="project-tile__title">{project.title}</h3>
      { getSubtitle(project) }
    </li>
  );
}


ProjectTile.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectTile;
