import AllInOneStyling from "./pages/AllInOneStyling"
import { BrowserRouter, Routes, Route } from 'react-router'
import ResponsiveCustomization from "./pages/Page"
import PhpDasar from "./pages/PhpDasar"
import LaragonSetup from "./pages/LaragonSetup"
import FormHandling from "./pages/FormHandling"
import WebFoundation from "./pages/WebFoundation"
import Home from "./pages/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cheatsheet/all-in-one-styling" element={<AllInOneStyling />} />
        <Route path="/cheatsheet/responsive-customization" element={<ResponsiveCustomization />} />
        <Route path="/cheatsheet/php-dasar" element={<PhpDasar />} />
        <Route path="/cheatsheet/laragon-setup" element={<LaragonSetup />} />
        <Route path="/cheatsheet/form-handling" element={<FormHandling />} />
        <Route path="/cheatsheet/web-foundation" element={<WebFoundation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App