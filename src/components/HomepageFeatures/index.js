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
  },
  {
    title: "QMS - Điều phối - HCM",
    url: "http://qmstest.tahospital.vn/feature/arrange",
    account: "bamso / 1",
  },
  {
  title: "26. Quản lý gói khám",
    url: "http://172.20.9.17:6023",
    account: "duc / 123",
  },
  {
    title: "27. Khám sức khỏe",
    url: "http://172.20.9.17:6019",
    account: "duc / 123",
  },
  {
    title: "27. Quản lý Voucher",
    url: "http://172.20.9.17:6012/",
    account: "duc / 123",
  }

  

];

function Project({ title, url, account }) {
  return (
    <>
      <section style="background-color:#102E9E">
        <a href={url} className={styles.cardMain} target="_blank">
          <div className={styles.cardHeader}></div>
          <div className={styles.cardBody}>{title}</div>
        </a>
        <div className={styles.footer}>
          <div>{url}</div>
          <div>Account: {account}</div>
        </div>
      </section>
    </>
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
