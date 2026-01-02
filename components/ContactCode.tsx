import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'linkedin',
    link: 'abhiram-anil-092946223',
    href: 'https://www.linkedin.com/in/abhiram-anil-092946223/',
  },
  {
    social: 'email',
    link: 'abhiramaanil@gmail.com',
    href: 'mailto:abhiramaanil@gmail.com',
  },
  {
    social: 'github',
    link: 'Abteeeen',
    
    href: 'https://github.com/Abteeeen',
  },
  {
    social: 'location',
    link: 'Coimbatore, Kerala',
    href: 'https://www.google.com/maps/place/Coimbatore,+Kerala',
  },
  {
    social: 'current_job',
    link: 'Codevantage',
    href: 'https://www.codevantage.in/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
