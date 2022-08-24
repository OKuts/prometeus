import {Button} from "../elements/Button";
import {ICard} from ".";
import {FC} from "react";

interface CardProps {
  card: ICard
  id: number
}

export const Card: FC<CardProps> = ({card, id}) => {
  const {name, image, flovers, price} = card
  return (
    <div className={'card'}>
      <img src={image} alt=""/>
      <p>{name}:</p>
      <p>{flovers}</p>
      <p className={'price'}>{price} грн</p>
      <Button text={'В кошик'} border={'border1'} background={'color5'}/>
    </div>
  )
}
