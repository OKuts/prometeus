import {Button} from "../elements/Button";

export const First = () => {
  return (
    <section className={'section1'}>
      <div className="content">
        <div className={'first_content'}>
          <h2 className={'h2'}>Букет із кущових троянд "Довгоочікуване щастя"</h2>
          <p className={'p'}>Ніжний та витончений шик у букеті з троянд - гарний вибір для коханої людини</p>
          <div>
            <Button text={'В кошик'} border={'border1'} background={'color1'}/>
            <Button text={'В каталог'} border={'border1'} background={'color5'}/>
          </div>
        </div>
      </div>
    </section>
  )
}
