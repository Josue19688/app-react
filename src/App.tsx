import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { routes } from './routes/routes';
import { Suspense } from 'react';

setupIonicReact();

const App: React.FC = () => (
  <Suspense>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
          <IonTabBar slot="bottom">
              {
                routes.map(route=>(
                  <IonTabButton key={route.path} tab={route.name} href={route.path}>
                    <IonIcon icon={route.icon} />
                    <IonLabel>{route.name}</IonLabel>
                  </IonTabButton>
                ))
              }
            </IonTabBar>
            <IonRouterOutlet>
              {
                routes.map(route=>(
                  <Route 
                  key={route.path} 
                  exact path={route.path}
                  render={()=><route.Component/>}
                  />
                ))
              }
            </IonRouterOutlet>
          
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  </Suspense>
);

export default App;
