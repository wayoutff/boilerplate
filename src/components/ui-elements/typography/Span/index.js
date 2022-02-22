import React from 'react'

function Span ({
  children,
  ...props
}) {
  
  return (
    <span>
      {children}
    </span>
  )
}

export default Span
