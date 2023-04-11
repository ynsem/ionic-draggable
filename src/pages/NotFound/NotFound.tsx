import * as React from 'react'
import { IonContent, IonPage } from '@ionic/react'


// import { RouterPath } from '@/router/RoutePath'

const authenticated = true

const NotFound = () => {
  // const navigate = useNavigate()

  const handleGoBack = () => {
    if (authenticated) {
      // navigate(RouterPath.Main)
    } else {
      // navigate(RouterPath.About)
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>404</h1>
        <button type='button' onClick={handleGoBack}>Назад</button>
      </IonContent>
    </IonPage>

  )
}

export default NotFound
