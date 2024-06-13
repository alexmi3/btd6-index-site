import './App.css';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LoginRedirect from './routes/LoginRedirect';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './routes/HomePage';
import TwoTC from './routes/challenges/TwoTC';
import TwoTCCRules from './routes/challenges/rules/TwoTCCRules';
import TwoTCNotes from './routes/challenges/notes/TwoTCNotes';
import TwoTCExtraInfo from './routes/challenges/info/TwoTCExtraInfo';
import { AddTwoTC, EditTwoTC } from './routes/challenges/manip/ManipTwoTC';
import FTTC from './routes/challenges/FTTC';
import FTTCRules from './routes/challenges/rules/FTTCRules';
import FTTCNotes from './routes/challenges/notes/FTTCNotes';
import FTTCExtraInfo from './routes/challenges/info/FTTCExtraInfo';
import { AddFTTC, EditFTTC } from './routes/challenges/manip/ManipFTTC';
import LCC from './routes/challenges/LCC';
import LCCRules from './routes/challenges/rules/LCCRules';
import LCCNotes from './routes/challenges/notes/LCCNotes';
import { AddLCC, EditLCC } from './routes/challenges/manip/ManipLCC';
import LTC from './routes/challenges/LTC';
import LTCRules from './routes/challenges/rules/LTCRules';
import LTCNotes from './routes/challenges/notes/LTCNotes';
import { AddLTC, EditLTC } from './routes/challenges/manip/ManipLTC';
import LCD from './routes/challenges/LCD';
import LCDRules from './routes/challenges/rules/LCDRules';
import LCDNotes from './routes/challenges/notes/LCDNotes';
import { AddLCD, EditLCD } from './routes/challenges/manip/ManipLCD';
import TwoMPC from './routes/challenges/TwoMPC';
import TwoMPRules from './routes/challenges/rules/TwoMPRules';
import TwoMPNotes from './routes/challenges/notes/TwoMPNotes';
import TwoMPExtraInfo from './routes/challenges/info/TwoMPExtraInfo';
import { AddTwoMP, EditTwoMP } from './routes/challenges/manip/ManipTwoMP';
import TwoTCC from './routes/challenges/TwoTCC';
import TwoTCRules from './routes/challenges/rules/TwoTCRules';
import TwoTCCNotes from './routes/challenges/notes/TwoTCCNotes';
import TwoTCCExtraInfo from './routes/challenges/info/TwoTCCExtraInfo';
import { AddTwoTCC, EditTwoTCC } from './routes/challenges/manip/ManipTwoTCC';
import Maps from './routes/reference/Maps';
import { AddMap } from './routes/reference/manip/ManipMap';
import BalanceChanges from './routes/reference/BalanceChanges';
import ManipBalanceChanges from './routes/reference/manip/ManipBalanceChanges';
import ChimpsStarts from './routes/guides/ChimpsStarts';
import AddChimpsStart from './routes/guides/manip/AddChimpsStart';
import ExtractingGameAssets from './routes/guides/ExtractingGameAssets';
import NotFound from './routes/NotFound';


const router = createBrowserRouter([
  {
    path: "*",
    element: <AppImpl />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "2tc",
        element: <TwoTC />,
      },
      {
        path: "2mp",
        element: <TwoMPC />
      },
      {
        path: "fttc",
        element: <FTTC />
      },
      {
        path: "ltc",
        element: <LTC />
      },
      {
        path: "lcc",
        element: <LCC />
      },
      {
        path: "lcd",
        element: <LCD />
      },
      {
        path: "2tcc",
        element: <TwoTCC />
      },
      {
        path: "add-2tc-form",
        element: <AddTwoTC />
      },
      {
        path: "add-2mp-form",
        element: <AddTwoMP />
      },
      {
        path: "add-fttc-form",
        element: <AddFTTC />
      },
      {
        path: "add-2tcc-form",
        element: <AddTwoTCC />
      },
      {
        path: "add-ltc-form",
        element: <AddLTC />
      },
      {
        path: "add-lcc-form",
        element: <AddLCC />
      },
      {
        path: "add-lcd-form",
        element: <AddLCD />
      },
      {
        path: "edit-2mp-form",
        element: <EditTwoMP />
      },
      {
        path: "edit-2tc-form",
        element: <EditTwoTC />
      },
      {
        path: "edit-fttc-form",
        element: <EditFTTC />
      },
      {
        path: "edit-2tcc-form",
        element: <EditTwoTCC />
      },
      {
        path: "edit-ltc-form",
        element: <EditLTC />
      },
      {
        path: "edit-lcc-form",
        element: <EditLCC />
      },
      {
        path: "edit-lcd-form",
        element: <EditLCD />
      },
      {
        path: "2tc/extra-info",
        element: <TwoTCExtraInfo />
      },
      {
        path: "2mp/extra-info",
        element: <TwoMPExtraInfo />
      },
      {
        path: "fttc/extra-info",
        element: <FTTCExtraInfo />
      },
      {
        path: "2tcc/extra-info",
        element: <TwoTCCExtraInfo />
      },
      {
        path: "2mp/notes",
        element: <TwoMPNotes />
      },
      {
        path: "2tc/notes",
        element: <TwoTCNotes />
      },
      {
        path: "fttc/notes",
        element: <FTTCNotes />
      },
      {
        path: "2tcc/notes",
        element: <TwoTCCNotes />
      },
      {
        path: "ltc/notes",
        element: <LTCNotes />
      },
      {
        path: "lcc/notes",
        element: <LCCNotes />
      },
      {
        path: "lcd/notes",
        element: <LCDNotes />
      },
      {
        path: "2mp/rules",
        element: <TwoMPRules />
      },
      {
        path: "2tc/rules",
        element: <TwoTCRules />
      },
      {
        path: "fttc/rules",
        element: <FTTCRules />
      },
      {
        path: "2tcc/rules",
        element: <TwoTCCRules />
      },
      {
        path: "ltc/rules",
        element: <LTCRules />
      },
      {
        path: "lcc/rules",
        element: <LCCRules />
      },
      {
        path: "lcd/rules",
        element: <LCDRules />
      },
      {
        path: "maps",
        element: <Maps />
      },
      {
        path: "add-map",
        element: <AddMap />
      },
      {
        path: "chimps-starts",
        element: <ChimpsStarts />
      },
      {
        path: 'add-chimps-start',
        element: <AddChimpsStart />
      },
      {
        path: "extracting-game-assets",
        element: <ExtractingGameAssets />
      },
      {
        path: "balance-changes",
        element: <BalanceChanges />
      },
      {
        path: "modify-balance-changes",
        element: <ManipBalanceChanges />
      },
      {
        path: 'login-redirect',
        element: <LoginRedirect />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

function AppImplImpl() {
  const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();
  return <div id="appContainer">
    <header>
      <a className='nolinkstyle' href='/'>
        <img className='glueRat' alt='glue rat' src='/GlueGunnerPetRatIcon.png' />
        <span className='websiteTopLeftTitle'>BTD6 Index</span>
      </a>
      <nav>
        <ul>
          {
            !isLoading && (
              isAuthenticated
              ? <li>
                  Account
                  <ul className='dropdown'>
                    <strong>{user.email}</strong>
                    <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</li>
                  </ul>
                </li>
              : <li onClick={() => loginWithRedirect({
                  appState: {
                    returnTo: `${window.location.pathname}${window.location.search}${window.location.hash}` }
                  }
                )}>Login</li>
            )
          }
          <li>
            Challenges
            <ul className='dropdown'>
              <li><a className='nolinkstyle' href='/2tc'>2TC</a></li>
              <li><a className='nolinkstyle' href='/fttc'>FTTC</a></li>
              <li><a className='nolinkstyle' href='/lcc'>LCC</a></li>
              <li><a className='nolinkstyle' href='/ltc'>LTC</a></li>
              <li><a className='nolinkstyle' href='/lcd'>LCD</a></li>
              <li><a className='nolinkstyle' href='/2mp'>2MPC</a></li>
              <li><a className='nolinkstyle' href='/2tcc'>2TCC</a></li>
            </ul>
          </li>
          <li>
            Reference
            <ul className='dropdown'>
              <li><a className='nolinkstyle' href='/maps'>Maps</a></li>
              <li><a className='nolinkstyle' href='/balance-changes'>Balance Changes</a></li>
            </ul>
          </li>
          <li>
            Guides
            <ul className='dropdown'>
              <li><a className='nolinkstyle' href='/chimps-starts'>CHIMPS Starts</a></li>
              <li><a className='nolinkstyle' href='/extracting-game-assets'>Extracting BTD6 Game Assets</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <div id="mainContainer">
      <main>
        <Outlet />
      </main>
    </div>
  </div>;
}

function AppImpl() {
  const navigate = useNavigate();

  return <Auth0Provider
    domain='lordlandmaster.us.auth0.com'
    clientId='wyzIQ763QxIMn9UD6dVptW4jtK9dlq2c'
    authorizationParams={{
      redirect_uri: window.location.origin + '/login-redirect',
      audience: 'https://btd6index.win/',
      scope: 'openid email profile offline_access'
    }}
    useRefreshTokens={true}
    onRedirectCallback={(state) => {
      navigate(state?.returnTo ?? window.location.origin);
    }}
    useRefreshTokensFallback={true}
    >
    <HelmetProvider><AppImplImpl /></HelmetProvider>
  </Auth0Provider>;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
