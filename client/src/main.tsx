import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(

        <RecoilRoot>
            <Auth0Provider
             domain="dev-qr50ynbhgeny6ucg.us.auth0.com"
             clientId="xY62dTNBOVg1StcMOmLIUKXOzS7hs5FD"
             authorizationParams={{
               redirect_uri: window.location.origin
             }}
            >
                <App />
            </Auth0Provider>
        </RecoilRoot>
)
