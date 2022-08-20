import {Social} from "./Social";

export const Section2 = () => {
  const flowers = [
    ['bouquets.jpg', 'Букети'],
    ['natural_flowers.jpg', 'Живі квіти'],
    ['own_bouquet.png', '"Свій букет"']]

  return (
    <section className={'section2'}>
      <div className={'flowers'}>
        {flowers.map((el, i) =>
          <div className={'flowers_bg'} key={i}>
            <img src={`/images/${flowers[i][0]}`} alt="flowers"/>
            <div>{flowers[i][1]}</div>
          </div>
        )}
      </div>
      <div className={'women_bg'}>
        <div className="section2_content">
          <h2 className={'h2'}>Про нас</h2>
          <p className={'p'}>Яких квітів тут лише немає! І садові, і польові, і кімнатні у глиняних горщиках. Очі
            розбігаються від такого достатку.</p>
          <p className={'p'}>Тут представлена і багата колекція кімнатних рослин: кактуси різної форми та величини,
            ніжні
            фіалки, усипані квітами, аспарагуси, фікуси.</p>
        </div>
        <Social cn={'vertical'}/>
      </div>

    </section>
  )
}
