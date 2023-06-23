import { ButtonHTMLAttributes, MouseEvent } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="border-none bg-none font-fira text-sm text-text opacity-70 transition-all hover:text-primary hover:opacity-100"
    >
      {title}
    </button>
  )
}

export default Button
