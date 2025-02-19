import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './todolist/todolist'
import Navbar from './navbar/navbar'
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <MainPage />
  </StrictMode>,
)
