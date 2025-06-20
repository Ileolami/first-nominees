import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <div className="container text--center">
        <h1 className={styles.title}>
          Welcome to First Requirement Process (FRP) Documentation
        </h1>
          <p className={styles.subtitle}>
            This document refers to the{' '}
            <a href="https://rainoil-dev.gemscloud.app/" target="_blank" rel="noopener noreferrer">
              CLIENT PORTAL
            </a>{' '}
            module as contained in the project contract.
          </p>
        <div className={styles.ctaButtons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            📘 Start with Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
    wrapperClassName={clsx('hero hero--primary', styles.heroBanner)}
      title="First Nominees FRP Docs"
      description="The official documentation for First Nominees' First Requirement Process system.">
      <HomepageHeader />
    </Layout>
  );
}
