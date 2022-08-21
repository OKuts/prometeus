import * as Scroll from 'react-scroll'

export const Header = () => {
  return (
    <header>
      <img className={'logo'} src='./images/logo.png' alt={'logo'}/>
      <nav>
        <Scroll.Link to={'catalog'} smooth={true} duration={500}>
          <span>Каталог</span>
        </Scroll.Link>
        <Scroll.Link to={'about'} smooth={true} duration={500}>
          <span>Про нас</span>
        </Scroll.Link>
        <Scroll.Link to={'catalog'} smooth={true} duration={500}>
          <span>Збери букет</span>
        </Scroll.Link>
        <Scroll.Link to={'footer'} smooth={true} duration={500}>
          <span>Контакти</span>
        </Scroll.Link>
      </nav>
      <div>
        <img className={'icon'} src='./images/lupa.png' alt={'icon'}/>
        <img className={'icon'} src='./images/basket.png' alt={'icon'}/>
      </div>
    </header>
  )
}
