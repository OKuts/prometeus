import {Button} from "../elements/Button";
import {Social} from "./Social";

export const Mail =()=> {
  return (
    <div>
      <div className={'sign'}>
        <input type="email" placeholder={'Введіть свій e-mail'}/>
        <Button text={'Підписатися'} background={'color1'} border={'border1'}/>
      </div>
      <Social cn={'horizontal'}/>
      <span className={'copyright'}>Copyright &copy; 2022</span>
    </div>
  )
}
