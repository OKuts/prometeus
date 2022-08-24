import {Header, First, AboutUs, AboutAdd, Footer, Catalog, Response, Delivery} from ".";
import {Social} from "./Social";

export const App = () => {

  return (
    <div className={'container'}>
      <Header/>
      <First/>
      <AboutUs/>
      <AboutAdd/>
      <Catalog/>
      <Response/>
      <Delivery/>
      <Footer/>
    </div>
  )
}
