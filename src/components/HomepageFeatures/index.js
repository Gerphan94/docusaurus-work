import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const ProjectList = [
  {
    title: "CAS V2 - Đặt hẹn - HCM",
    url: "http://172.20.9.17:6007/",
    account: "tadev/12345678",
  },
  {
    title: "QMS - Điều phối - HCM",
    url: "http://qmstest.tahospital.vn:3000/feature/arrange",
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
      <section >
        <a href={url} target="_blank">
          <span className={styles.logo}>

          </span>
          <div className={styles.club}>{title}</div>
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
