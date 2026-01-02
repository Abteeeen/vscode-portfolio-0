import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <div className={styles.layout}>
      
      {/* Title using the correct class */}
      <h3 className={styles.pageTitle}>My Projects</h3>
      
      {/* Intro text using the correct class */}
      <p className={styles.pageSubtitle}>
        Here is a collection of my recent work. These projects showcase technical skills 
        across <strong>Machine Learning</strong>, <strong>HR Automation</strong>, and <strong>Data Analysis</strong>.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = [
    {
      id: 1,
      name: 'n8n Blog Agent',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      description: 'Automated writing agent using Notion & Google Grounding.',
      tags: ['n8n', 'AI Agent', 'Notion'],
      source_code: 'https://github.com/Abteeeen',
      demo: 'https://github.com/Abteeeen',
    },
    {
      id: 2,
      name: 'n8n Resume ATS',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135679.png',
      description: 'Automated Resume parser and ATS scorer built with n8n.',
      tags: ['n8n', 'HR Tech', 'Parsing'],
      source_code: 'https://github.com/Abteeeen',
      demo: 'https://github.com/Abteeeen',
    },
    {
      id: 3,
      name: 'Stock Prediction',
      image: 'https://cdn-icons-png.flaticon.com/512/3314/3314323.png',
      description: 'Hybrid LSTM & Random Forest model improving accuracy by 15%.',
      tags: ['Python', 'ML', 'LSTM'],
      source_code: 'https://github.com/Abteeeen',
      demo: 'https://github.com/Abteeeen',
    },
    {
      id: 4,
      name: 'Medical Imaging',
      image: 'https://cdn-icons-png.flaticon.com/512/3004/3004458.png',
      description: 'Deep Learning (Swin Transformer) with 92% accuracy.',
      tags: ['Deep Learning', 'TensorFlow'],
      source_code: 'https://github.com/Abteeeen',
      demo: 'https://github.com/Abteeeen',
    },
    {
      id: 5,
      name: 'Parkinson’s AI',
      image: 'https://cdn-icons-png.flaticon.com/512/2083/2083213.png',
      description: 'Django web app for early disease prediction using SVM.',
      tags: ['Django', 'SVM', 'Health'],
      source_code: 'https://github.com/Abteeeen',
      demo: 'https://github.com/Abteeeen',
    },
    {
      id: 6,
      name: 'Logistics Forecast',
      image: 'https://cdn-icons-png.flaticon.com/512/411/411763.png',
      description: 'Predictive delivery model for Symega using SAP data.',
      tags: ['SAP', 'Python', 'Analytics'],
      source_code: 'https://github.com/Abteeeen',
      demo: 'https://github.com/Abteeeen',
    },
  ];

  return {
    props: { projects },
  };
}

export default ProjectsPage;