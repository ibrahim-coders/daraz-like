import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import './index.css';
import Router from './router/Router';

import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './AuthContext/AuthProviters';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AuthProviders>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </AuthProviders>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
