import {FC} from "react";

interface ButtonProps {
  text: string
  border: string
  background: string
}

export const Button: FC<ButtonProps> = ({text, background, border}) => {
  return (
    <button className={`${background} ${border} button`}>{text}</button>
  )
}
