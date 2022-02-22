import React, { Component } from "react";
import styles from './index.css'

interface IProps {
  label: string
  items: any
  onChange: (event: any) => void
}

export default function ({
  label = '',
  items,
  onChange
}: IProps) {

  function _onChange (event: any) {
    onChange && onChange(event.target.value)
  }
  return (
    <div className={styles.root}>
      <p className={styles.label}>{label}</p>
      {items && items.length > 0 && (
        <div className={styles.selectBox}>
          <select className={styles.select} onChange={_onChange}>
            {items.map((item: any, index: number) => {
              return <option key={item.value + index} value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
      )}
    </div>
  );
}
