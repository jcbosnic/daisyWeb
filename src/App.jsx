import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Navegation from "./components/Navegation"
import Coments from "./components/Coments"
import Contact from "./components/Contact"
import About from "./components/About"

function App() {
  return (
    <main className="mainContainer">
        <BrowserRouter>
          <section className="mainBlock">
            <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="coments" element={ <Coments /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="about" element={ <About /> } />
            </Routes>
          </section>
          <Navegation />
        </BrowserRouter>
    </main>
  )
}

export default App
