import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import MainLayoutRouter from '@/router/MainLayoutRouter'

const MainLayout = ({
  match,
  location,
  history,
}: RouteComponentProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MainLayoutRouter match={match} location={location} history={history}/>
      </IonContent>
    </IonPage>
  )
}

export default MainLayout
