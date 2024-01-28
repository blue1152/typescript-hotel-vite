import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePage, LoginPage, SignUpPage } from './pages';

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
