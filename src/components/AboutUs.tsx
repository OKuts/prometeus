import {Social} from "./Social";

export const AboutUs = () => {
  const flowers = [
    ['bouquets.jpg', 'Букети'],
    ['natural_flowers.jpg', 'Живі квіти'],
    ['own_bouquet.png', '"Свій букет"']]

  return (
    <section className={'section2'} id={'about'}>
      <div className={'flowers content'}>
        {flowers.map((el, i) =>
          <div className={'flowers_bg'} key={flowers[i][0]}>
            <img src={`/images/${flowers[i][0]}`} alt="flowers"/>
            <div>{flowers[i][1]}</div>
          </div>
        )}
      </div>
      <div className={'about content'}>
        <div className="about_content">
          <h2 className={'h2'}>Про нас</h2>
          <p className={'p'}>Яких квітів тут лише немає! І садові, і польові, і кімнатні у глиняних горщиках. Очі
            розбігаються від такого достатку.</p>
          <p className={'p'}>Тут представлена і багата колекція кімнатних рослин: кактуси різної форми та величини,
            ніжні
            фіалки, усипані квітами, аспарагуси, фікуси.</p>
        </div>
        <div className={'women'}>
          <img className={'women_bg'} src="/images/abstract_background.png" alt=""/>
          <img src="/images/women.png" alt=""/>
        </div>
      </div>
      <Social cn={'vertical'}/>
    </section>
  )
}
