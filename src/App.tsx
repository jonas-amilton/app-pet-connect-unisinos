import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addCircleOutline, albumsOutline, enterOutline } from "ionicons/icons";
import Home from "./pages/Home";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import AddPet from "./pages/AddPet";

setupIonicReact();

const isLoggedIn = localStorage.getItem("userEmail");

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/home" component={Home} exact />
          <PrivateRoute path="/logout" component={Logout} exact />
          <PrivateRoute path="/add-pet" component={AddPet} exact />
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
          </Route>
        </IonRouterOutlet>
        {isLoggedIn && (
          <IonTabBar slot="bottom">
            <IonTabButton tab="logout" href="/logout">
              <IonIcon aria-hidden="true" icon={enterOutline} />
              <IonLabel>Logout</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={albumsOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="add-pet" href="/add-pet">
              <IonIcon aria-hidden="true" icon={addCircleOutline} />
              <IonLabel>Adicionar Pet</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
