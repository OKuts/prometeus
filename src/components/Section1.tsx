import {Button} from "../elements/Button";

export const Section1 = () => {
  return (
    <section className={'section1'}>
      <div>
        <h2 className={'h2'}>Букет із кущових троянд "Довгоочікуване щастя"</h2>
        <p className={'p'}>Ніжний та витончений шик у букеті з троянд - гарний вибір для коханої<br/>людини</p>
        <Button text={'В кошик'} border={'border1'} background={'color1'}/>
        <Button text={'В каталог'} border={'border1'} background={'color5'}/>
      </div>
    </section>
  )
}
