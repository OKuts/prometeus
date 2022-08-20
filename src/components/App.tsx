import {Header, Section1, Section2, Section3, Footer, Section4, Section5, Section6} from ".";

export const App = () => {

  return (
    <div className={'container'}>
      <Header/>
      <Section1/>
      <div className={'section23'}>
        <Section2/>
        <Section3/>
      </div>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}
