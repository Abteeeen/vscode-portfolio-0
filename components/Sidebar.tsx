import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/', label: 'home.tsx' },
  { Icon: VscGithubAlt, path: '/github', label: 'github.md' },
  { Icon: VscCode, path: '/projects', label: 'projects.js' },
  { Icon: VscEdit, path: '/certifications', label: 'certifications.json' }, // renamed from articles.json to certifications.json
  { Icon: VscMail, path: '/contact', label: 'contact.css' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about', label: 'about.html' },
  { Icon: VscSettings, path: '/settings', label: 'settings' },
];

const Sidebar = () => {
  const router = useRouter();
  

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, label }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                size={16}
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
              <span className={styles.sidebarLabel}>{label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, label }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
              <span className={styles.sidebarLabel}>{label}</span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
