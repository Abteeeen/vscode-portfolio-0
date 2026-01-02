import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

// Lightweight Typewriter Effect
function Typewriter({ words, speed = 55, pause = 1000, className = '' }: { words: string[]; speed?: number; pause?: number; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex <= currentWord.length) {
      setDisplayText(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setWordIndex((idx) => (idx + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, speed, wordIndex, words]);

  return (
    <span className={className}>
      {displayText}
      <span className={styles.typewriterCursor}>|</span>
    </span>
  );
}

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'const HomePage = () => {', type: 'function' },
    {
      code: '  const [isLoaded, setIsLoaded] = useState(true);',
      type: 'variable',
    },
    { code: '  const developerInfo = {', type: 'variable' },
    { code: "    name: 'Abhiram Anil',", type: 'array-item' },
    { code: "    role: 'Data Scientist',", type: 'array-item' },
    { code: "    bio: 'Delivering AI, automation and data-driven solutions'", type: 'array-item' },
    { code: '  };', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '  useEffect(() => {', type: 'nested-function' },
    {
      code: '    document.title = `${developerInfo.name} | Portfolio`;',
      type: 'return',
    },
    { code: '    setIsLoaded(true);', type: 'function-call' },
    { code: '  }, []);', type: 'close' },
    { code: '', type: 'blank' },
    { code: '  return (', type: 'return-object' },
    { code: '    <main className="hero-container">', type: 'object-method' },
    { code: '      <h1>{developerInfo.name}</h1>', type: 'object-method' },
    { code: '      <p>{developerInfo.role}</p>', type: 'object-method' },
    { code: '      <div className="cta">', type: 'object-method' },
    {
      code: '        <a href="#contact" className="cta-btn">Contact Me</a>',
      type: 'object-method',
    },
    { code: '      </div>', type: 'object-method' },
    { code: '    </main>', type: 'object-method' },
    { code: '  );', type: 'close' },
    { code: '};', type: 'close-function' },
    { code: '', type: 'blank' },
    { code: 'export default HomePage;', type: 'function-call' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  // Handler to scroll to footer/contact section
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if(contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Abhiram <span className={styles.accentText}>Anil</span>
          </h1>

          <div className={styles.developerRole}>
            <Typewriter
              words={[
                'Data Scientist',
                'HR Analyst',
                'Automation Specialist',
                'Python Developer'
              ]}
              speed={55}
              pause={850}
              className={styles.typewriter}
            />
          </div>

          <p className={styles.bio}>
            Delivering AI, automation and data-driven solutions. Focused on clean code and tailored analytics for modern business needs.
          </p>

          <div className={styles.actionLinks}>
            <a
              href="#contact"
              className={styles.primaryLink}
              onClick={handleContactClick}
            >
              Contact Me <VscArrowRight />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
