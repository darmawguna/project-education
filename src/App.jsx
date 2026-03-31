import AllInOneStyling from "./pages/AllInOneStyling"
import { BrowserRouter, Routes, Route } from 'react-router'
import ResponsiveCustomization from "./pages/Page"
import PhpDasar from "./pages/PhpDasar"
import Home from "./pages/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cheatsheet/all-in-one-styling" element={<AllInOneStyling />} />
        <Route path="/cheatsheet/responsive-customization" element={<ResponsiveCustomization />} />
        <Route path="/cheatsheet/php-dasar" element={<PhpDasar />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App