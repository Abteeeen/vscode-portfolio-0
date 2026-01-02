import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      {/* 1. Faded Background Image (The "Glass" Effect) */}
      <img 
        src={project.image} 
        alt={project.name} 
        className={styles.background} 
      />

      <div className={styles.content}>
        {/* Top Section */}
        <div>
           {/* 2. Small Neat Logo Box */}
          <div className={styles.logoWrapper}>
            <img 
              src={project.image} 
              alt={project.name} 
              className={styles.logo} 
            />
          </div>
          
          <h3 className={styles.title}>{project.name}</h3>
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section: Links */}
        <div className={styles.cta}>
          {project.source_code && (
            <a 
              href={project.source_code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;