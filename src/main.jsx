import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Landing from "../src/Landing";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
