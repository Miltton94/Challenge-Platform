import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="flex items-center rounded-sm border-none bg-light px-2 py-1 font-fira text-title transition-all hover:bg-primary hover:text-light"
    >
      {children}
    </button>
  )
}

export default Button
