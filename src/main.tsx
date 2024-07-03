import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react'
import { Auth0Config } from './config/auth0.config.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <Auth0Provider
  domain={Auth0Config.domain}
  clientId={Auth0Config.clientId}
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </Auth0Provider>
)
