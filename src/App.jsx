import Home from "./components/Home"
import Navegation from "./components/Navegation"
import Coments from "./components/Coments"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <main className="mainContainer">
        <BrowserRouter>
          <section className="mainBlock">
            <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="coments" element={ <Coments /> } />
            </Routes>
          </section>
          <Navegation />
        </BrowserRouter>
    </main>
  )
}

export default App
