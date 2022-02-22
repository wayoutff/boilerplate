import React from "react";

import styles from "./index.css";

const combine = (...args: string[]) => args.join(' ')

export default ({ onPress, disabled, size = 'full', variant = 'flat', children }: any) => {

  function _onPress () {
    if (disabled) return
    onPress && onPress()
  }

  return (
    <button className={combine(styles.buttonOrange, styles[size], styles[variant])} onClick={onPress}>
      {children}
    </button>
  );
};


// variant = [flat, outlined]
// size = [s, m, l, full]