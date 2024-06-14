import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Camera Animation',
    Img: require('@site/static/img/CALogo.png').default,
    description: (
      <>
        Camera Animation was originally a mod for VRChat before EAC banned all mods. After the ban, Hppe created Camera Animation for VRChat on Unity. This tool allows for greater creativity, videography, and flexibility.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureImg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
