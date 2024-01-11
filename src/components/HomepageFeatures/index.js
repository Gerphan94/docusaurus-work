import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const ProjectList = [
  {
    title: "CAS V2 - Đặt hẹn - HCM",
    url: "http://172.20.9.17:6007/",
    account: "tadev/12345678",
    note: "",
  },
  {
    title: "QMS - Điều phối - HCM",
    url: "http://qmstest.tahospital.vn/feature/arrange",
    account: "bamso / 1",
    note: "Url (LCD): http://qmstest.tahospital.vn/tv",
  },
];

function Project({ title, url, account, note }) {
  return (
    <a href={url} className={styles.projectCard}>
      
        <div className={styles.header}></div>
        <div>{title}</div>
        <div className={styles.footer}>
          <a href={url}>{url}</a>
        </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.projects}>
      {ProjectList.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  );
}
