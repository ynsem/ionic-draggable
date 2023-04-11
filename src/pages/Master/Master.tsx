import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { IonContent, IonPage } from '@ionic/react'

const Master = () => {
  const { pathname } = useLocation()
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>Master</h1>
        <p>{pathname}</p>
      </IonContent>
    </IonPage>
  )
} 

export default Master
