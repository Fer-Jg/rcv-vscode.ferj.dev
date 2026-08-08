import type {CSSProperties, PointerEvent, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const defaultHeroStyle = {
    '--hero-x': '50%',
    '--hero-y': '42%',
    '--hero-hue': '205',
  } as CSSProperties;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    const hue = 185 + x * 0.65;

    event.currentTarget.style.setProperty('--hero-x', `${x.toFixed(2)}%`);
    event.currentTarget.style.setProperty('--hero-y', `${y.toFixed(2)}%`);
    event.currentTarget.style.setProperty('--hero-hue', hue.toFixed(0));
  }

  function handlePointerLeave(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--hero-x', '50%');
    event.currentTarget.style.setProperty('--hero-y', '42%');
    event.currentTarget.style.setProperty('--hero-hue', '205');
  }

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={defaultHeroStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            RCV-VSCode tutorial - 7min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
