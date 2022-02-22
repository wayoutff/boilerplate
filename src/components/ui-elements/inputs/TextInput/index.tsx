import React from 'react'
import styles from './index.css'

interface IProps {
  value: any;
  label: string;
  placeholder: string
  onChange: (value: any) => void
}

const Input = ({
  value,
  label,
  placeholder,
  onChange
}: IProps) => {

  function _onChange (e: any) {
    onChange && onChange(e.target.value)
  }

  return (
    <div className={styles.root}>
      <p className={styles.label}>{label}</p>
      <input
        className={styles.textarea}
        placeholder={placeholder}
        onChange={_onChange}
      />
    </div>
  )
}

export default Input