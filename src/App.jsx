
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  )
}

export default App
