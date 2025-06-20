import React from 'react'

const Button = ({children, version, type, isDisbled}) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisbled}>
        {children}
    </button>
  )
}

export default Button