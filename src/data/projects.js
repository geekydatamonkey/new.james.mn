import uuid from 'node-uuid';

const projects = [
  {
    title: 'Nom Nom Num',
    subtitle: 'In Progress',
    color: 'purple',
  },
  {
    title: 'SISter',
    color: 'yellow',
  },
  {
    title: 'Sustainable Design Online',
    subtitle: 'Minneapolis College of Art and Design',
    color: 'pink',
  },
  {
    title: 'ProgStar',
    subtitle: 'Foundation Fighting Blindness',
    color: 'orange',
  },
  {
    title: 'Public Art Review',
    subtitle: 'Forecast Public Art',
    color: 'blue',
  },
];

function generateId(project) {
  return Object.assign(project, { _id: uuid.v4() });
}

export default projects.map(generateId);
