import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import ErrorBoundaryComponent from '@/components/ErrorBoundary'

import '@ionic/react/css/flex-utils.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/display.css'
/* Theme variables */
import './theme/variables.css'

import { Router } from '@/router'

setupIonicReact()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 600000,
    },
  },
})

const App = () => (
  <IonApp>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundaryComponent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Router />
          </IonRouterOutlet>
        </IonReactRouter>
      </ErrorBoundaryComponent>
    </QueryClientProvider>
  </IonApp>
)

export default App
