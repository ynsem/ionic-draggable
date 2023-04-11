import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'

import { RouterPathList } from './routes'

const MainLayout = React.lazy(() => import('@/pages/MainLayout'))
const About = React.lazy(() => import('@/pages/About'))
const Auth = React.lazy(() => import('@/pages/Auth'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))

const Router = () => {
  const isAuthed = true

  return (
    <IonRouterOutlet>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            path={RouterPathList.Main}
            // exact
            render={props => {
              return isAuthed ? <MainLayout {...props} /> : <Auth />
            }}
          />
          <Redirect exact from="/" to={RouterPathList.Main} />
          <Route exact path={RouterPathList.About} component={About} />
          <Route exact path={RouterPathList.NotFound} component={NotFound} />
          <Route render={() => <Redirect to={RouterPathList.NotFound} />} />
        </Switch>
      </React.Suspense>
    </IonRouterOutlet>
  )
} 

export default Router