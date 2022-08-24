import {NavInfo} from "./NavInfo";
import {Mail} from "./Mail";

export const Footer = () => {
  const contacts = {
    title: 'Контакти',
    list: ['095 000 00 00', '095 000 10 00', 'Ми працюємо цілодобово'],
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
      <footer className={'footer'} id={'footer'}>
        <img className={'img_add footer_img_add'} src="/images/flowers 3.png" alt=""/>
        <img className={'footer_logo'} src='./images/logo.png' alt={'logo'}/>
        <div className={'footer__info'}>
          <NavInfo content={contacts}/>
          <NavInfo content={info}/>
          <NavInfo content={catalog}/>
          <Mail/>
        </div>
      </footer>
  )
}
