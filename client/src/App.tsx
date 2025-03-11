import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthLayout from './components/ui/auth/layout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>header</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
