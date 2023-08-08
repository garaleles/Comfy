import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-vvglghn3uwve2jpc.eu.auth0.com  --domain
//56TssJHcm2brbIV7uI5wUeB3sH5Lr99m   --clientID

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-vvglghn3uwve2jpc.eu.auth0.com'
    clientId='56TssJHcm2brbIV7uI5wUeB3sH5Lr99m'
    authorizationParams={{
      redirectUri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
