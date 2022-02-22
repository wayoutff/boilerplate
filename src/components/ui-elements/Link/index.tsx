import React from "react";
import { Routes, Link, BrowserRouter } from "react-router-dom";
import styles from './index.css'

export default ({ to, children, style }: any) => {
  return <Link style={style} className={styles.root} to={to}>{children}</Link>;
};
