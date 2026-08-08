import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    imageSrc: require('@site/static/img/create.gif').default,
    description: (
      <>
        Create and manage your CVs directly from VSCode with a guided workflow
        that keeps setup, editing, and output in one place.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageSrc: require('@site/static/img/output.gif').default,
    description: (
      <>
        Spend less time handling files and commands, and more time refining the
        content, structure, and presentation of your CV.
      </>
    ),
  },
  {
    title: 'Professional PDF Output',
    imageSrc: require('@site/static/img/showcase.png').default,
    description: (
      <>
        Turn structured YAML CV files into clean, polished PDFs that are ready
        to share, upload, or send with your applications.
      </>
    ),
  },
];

function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imageSrc} alt="" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
