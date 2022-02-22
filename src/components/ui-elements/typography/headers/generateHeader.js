import React from 'react'
import styles from './index.css'

export default function generateHeader (tag) {
  // todo validate
  const header = function Header ({ children, ...props }) {

    return (
      <p className={styles[tag]}>{children}</p>
    )
  }

  return header
}
