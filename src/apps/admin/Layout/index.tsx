import React from "react";

import styles from './index.css'

export default ({ children } : any) => {
  return <div className={styles.root}>{children}</div>;
};
