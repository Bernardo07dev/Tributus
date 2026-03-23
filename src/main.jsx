import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Landing from "../src/Landing";
import Home from "../src/pages/Home"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/home/:cnpj" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
