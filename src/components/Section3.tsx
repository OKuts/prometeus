export const Section3 = () => {
  const data = [
    ['constructor.png', 'Конструктор унікального букета'],
    ['delivery.png', 'Безкоштовна доставка по місту до 2-х годин'],
    ['indoor.png', 'Наявність кімнатних рослин'],
    ['for_loved_ones.png', 'Вибір квітів для коханих, мам та друзів'],
  ]

  return (
      <section className={'section3'}>
        <div className="content">
          <p>Працюємо для вас</p>
          <div className={'item_list'}>
            {data.map(([img, text]) =>
              <div key={img}>
                <img src={`/images/${img}`} alt=""/>
                <p>{text}</p>
              </div>
            )}
          </div>
        </div>
      </section>
  )
}
