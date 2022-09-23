import React from "react"

type ButtonProps = {
    readonly children: React.ReactNode,
    className?: string,
    onClick?: () => void | (() => {})
} 

const Button = ({children, className, onClick}: ButtonProps)  => {
  return (
    <button onClick={onClick} className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}>{children}</button>
  )
}

export default Button