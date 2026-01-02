import styles from '@/styles/AboutPage.module.css';

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "SQL", color: "#cc2927" },
  { name: "Power BI", color: "#F2C811" },
  { name: "Excel", color: "#217346" },
  { name: "SAP", color: "#0fa2e6" },
  { name: "React JS", color: "#61dafb" },
  { name: "Django", color: "#092E20" },
  { name: "Flask", color: "#000000" },
  { name: "TensorFlow", color: "#FF6F00" },
];

const badgeStyle = (color: string) => ({
  background: color,
  color: '#fff',
  borderRadius: '4px',
  padding: '3px 10px',
  marginRight: '7px',
  marginBottom: '6px',
  display: 'inline-block',
  fontWeight: 600,
  fontSize: '0.97em',
  letterSpacing: '0.01em',
  lineHeight: 1.6,
});

const AboutPage = () => {
  return (
    <div className={styles.container} style={{ fontFamily: 'monospace' }}>
      <div className={styles.content} style={{ maxWidth: 650, margin: '0 auto' }}>
        <h1 className={styles.title} style={{ marginBottom: 0 }}>👋 Hi, I&apos;m Abhiram Anil</h1>
        <div className={styles.subtitle} style={{ marginBottom: '2rem', fontSize: '1.13em', opacity: 0.82 }}>
          <b>HR Analyst &amp; Automation Specialist at Codevantage, Coimbatore</b>
        </div>

        <pre
          style={{
            background: '#191c20',
            borderRadius: 10,
            padding: '24px 18px',
            color: '#eaeaea',
            fontSize: '1.03em',
            letterSpacing: '0.12px',
            overflowX: 'auto',
            marginBottom: '2.3rem',
            boxShadow: '0 1px 8px rgba(0,0,0,0.09)'
          }}
        >
{`I am an HR Analyst & Automation Specialist at Codevantage in Coimbatore.
I bridge the gap between leadership and employees by building HR automation workflows
and creating performance dashboards.
`}
        </pre>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 8 }}>🚀 Tech Stack</h2>
          <div style={{ marginBottom: 22, marginTop: 12 }}>
            {techStack.map(skill => (
              <span key={skill.name} style={badgeStyle(skill.color)}>
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 10 }}>🎓 Education</h2>
          <ul style={{ paddingLeft: 20, margin: 0, fontSize: '1.08em', lineHeight: 1.5 }}>
            <li>
              <b>Master of Science in Data Science</b> <br />
              <span style={{ opacity: 0.84 }}>Amrita Vishwa Vidyapeetham</span> &mdash; GPA: 8.39
            </li>
            <li style={{ marginTop: '0.6em' }}>
              <b>Bachelor of Computer Applications in Data Science</b> <br />
              GPA: 7.5
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
