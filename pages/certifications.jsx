import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const certifications = [
  {
    id: 1,
    name: 'IBM Data Engineering',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'Mastering ETL pipelines and big data architecture.',
    tags: ['Certificate', 'Data Engineering'],
  },
  {
    id: 2,
    name: 'IBM Data Privacy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'Securing information architecture and compliance.',
    tags: ['Certificate', 'Privacy'],
  },
  {
    id: 3,
    name: 'Accenture Analytics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    description: 'Unlocking business insights through visualization.',
    tags: ['Certificate', 'Analytics'],
  },
  {
    id: 4,
    name: 'Tata Group',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg',
    description: 'Building effective dashboards for business strategy.',
    tags: ['Certificate', 'PowerBI'],
  },
  {
    id: 5,
    name: 'NPTEL Data Mining',
    image: 'https://archive.nptel.ac.in/content/college_assets/images/nptel_logo.png',
    description: 'Algorithms for massive datasets and pattern recognition.',
    tags: ['Certificate', 'Algorithms'],
  },
  {
    id: 6,
    name: 'Codevantage HR',
    image: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png',
    description: 'Python scripts for streamlining people operations.',
    tags: ['Certificate', 'Automation'],
  },
];

const Certifications = () => {
  return (
    <>
      <h3 className={styles.heading}>My Certifications</h3>
      <div className={styles.container}>
        {certifications.map((cert) => (
          <ProjectCard key={cert.id} project={cert} />
        ))}
      </div>
    </>
  );
};

export default Certifications;