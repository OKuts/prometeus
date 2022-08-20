export const Header = () => {
  return (
      <header>
        <img className={'logo'} src='./images/logo.png' alt={'logo'}/>
        <nav>
          <span>Каталог</span>
          <span>Про нас</span>
          <span>Збери букет</span>
          <span>Контакти</span>
        </nav>
        <div>
          <img className={'icon'} src='./images/lupa.png' alt={'icon'}/>
          <img className={'icon'} src='./images/basket.png' alt={'icon'}/>
        </div>
      </header>
  )
}
