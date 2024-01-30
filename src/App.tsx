import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage } from './pages';
import { AuthProvider } from './utils/authContext';

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
