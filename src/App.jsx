
import './App.css'
import { MainNavbarComponent, } from './components';
import Routers from './Routers'
import { Context } from "./shared/context";

function App() {
  return (
    <>
        <Context.Provider value={{ }}>
        <MainNavbarComponent/>
        <Routers />
      </Context.Provider>
    </>
  )
}

export default App
