import styles from './page.module.css';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome cost-tracker 👋
            </h1>
          </div>
          <div className="container">
            <Link href="/users">Users</Link>
            <Link href="/categories">Categories</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
