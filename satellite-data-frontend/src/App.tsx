import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'; 
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Route exact path="/" component={Home} />
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
