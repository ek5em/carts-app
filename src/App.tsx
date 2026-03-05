import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartsPage from './pages/CartsPage';
import CartDetailPage from './pages/CartDetailPage';
import {
  AppShell,
  Logo,
  TopBar,
} from './App.styles';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const CartIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.69L23 6H6" />
  </svg>
);

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppShell>
        <TopBar>
          <Logo>
            <CartIcon />
            CartManager
          </Logo>
        </TopBar>
        <Routes>
          <Route path="/" element={<CartsPage />} />
          <Route path="/carts/:id" element={<CartDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
