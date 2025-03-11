import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthLayout from './components/auth/layout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AdminLayout from './components/admin-view/layout';
import AdminDashboard from './pages/admin-view/AdminDashboard';
import AdminProducts from './pages/admin-view/AdminProducts';
import AdminOrders from './pages/admin-view/AdminOrders';
import ShoppingLayout from './components/shopping-view/layout';
import NotFound from './pages/not-found';
import AccountPage from './pages/shopping-view/AccountPage';
import CheckOutPage from './pages/shopping-view/CheckOutPage';
import ShopListing from './pages/shopping-view/ShopListing';
import CheckAuth from './components/common/CheckAuth';

function App() {
  const isAuthenticated = false;
  const user = { role: 'user' };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="listing" element={<ShopListing />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
