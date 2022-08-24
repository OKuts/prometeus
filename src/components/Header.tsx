import * as Scroll from 'react-scroll'

export const Header = () => {
  return (
    <header>
      <img className={'logo'} src='./images/logo.png' alt={'logo'}/>
      <div className={'navbar'}>
        <div className="burger">{[1, 2, 3].map(n => <div key={n}/>)}</div>
        <nav className={'header_nav'}>
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
      </div>
      <div className={'icon_wrap'}>
        <img className={'icon'} src='./images/lupa.png' alt={'icon'}/>
        <img className={'icon'} src='./images/basket.png' alt={'icon'}/>
      </div>
    </header>
  )
}
