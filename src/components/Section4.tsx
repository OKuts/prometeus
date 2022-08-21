import {useEffect, useState} from "react";
import {Card, Pagination} from ".";

export interface ICard {
  price: number
  image: string
  name: string
  flovers: string
}

export const Section4 = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [current, setCurrent] = useState(0)


  useEffect(() => {
    fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
      .then(arr => arr.json())
      .then(arr => setCards(arr))
  }, [])

  return (
    <section className={'section4'} id={'catalog'}>
      <div className={'content'}>
        <h2 className={'h2'}>Каталог</h2>
        <div className={'cards'}>
          {cards.map((card, i) =>
            <Card key = {card.name} card = {card} id={i}/>
          )}
        </div>
        <Pagination current = { current }/>
      </div>
    </section>
  )
}
