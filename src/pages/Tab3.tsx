
import { IonItem, IonLabel, IonList ,
IonContent, 
  IonHeader, IonPage, 
  IonTitle, IonToolbar} from '@ionic/react';


import './Tab3.css';

const Tab3: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
        <IonList  inset={true}>
    <IonItem routerLink="/tab1">
      <IonLabel >Pokémon Yellow</IonLabel>
    </IonItem>
    <IonItem routerLink="/home">
      <IonLabel >Mega Man X</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>The Legend of Zelda</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Pac-Man</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Super Mario World</IonLabel>
    </IonItem>
  </IonList>
       
      </IonContent>
    </IonPage>

   
  );
};

export default Tab3;
