export const Section6 = () => {
  const select = [
    'Ви замовляєте букет через каталог',
    'Сповістимо Вас дзвінком або повідомленням про доставку букета',
    'Ви оплачуєте товар через картку VISA або MC, або Приват24',
    'Вам передзвонять наші менеджери, якщо потрібно щось уточнити',
    'Надсилаємо фото зібраного букета, щоб узгодити все',
    'Доставляємо букет одержувачу протягом 2-х годин'
  ]
  return (
    <section className={'section6'}>
      <h2 className={'h2'}>Доставка і оплата</h2>
      <div className={'select'}>
        {select.map((el, i) =>
          <div key={i} className={'select_item'}>
            <div className={'number'}>{i + 1}</div>
            <p>{el}</p>
          </div>
        )}
      </div>
    </section>
  )
}
