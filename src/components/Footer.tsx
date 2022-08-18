import {NavInfo} from "./NavInfo";

export const Footer = () => {
  const contacts = {
    title: 'Контакти',
    list: ['095 000 00 00', '095 000 00 00', 'Ми працюємо цілодобово'],
  }
  const info = {
    title: 'Інформація',
    list: ['Про нас', 'Хіт продажу', 'Відгуки', 'Доставка і оплата'],
  }

  const catalog = {
    title: 'Каталог',
    list: ['Збери свій букет', 'Живі квіти', 'Кімнатні рослини'],
  }

  return (
    <div className={'container'}>
      <footer className={'footer'}>
        <img className={'logo'} src='./images/logo.png' alt={'logo'}/>
        <div className={'footer__info'}>
          <NavInfo content={contacts}/>
          <NavInfo content={info}/>
          <NavInfo content={catalog}/>
        </div>
      </footer>
    </div>
  )
}
