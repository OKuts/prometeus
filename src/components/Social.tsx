import {FC} from "react";

interface SocialProps {
  cn: string
}

export const Social:FC <SocialProps> = ({cn}) => {
  return (
    <div className={cn}>
      <img src='./images/inst.png' alt='inst'/>
      <img src='./images/fb.png' alt='fb'/>
      <img src='./images/viber.png' alt='viber'/>
    </div>
  )
}
