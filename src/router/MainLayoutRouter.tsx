import * as React from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'

import { RouterPathList } from './routes'
import Master from '@/pages/Master'

const MainLayoutRouter = ({ match }: RouteComponentProps) => (
  <IonRouterOutlet>
    {/* <React.Suspense fallback={<h1>Loading...</h1>}>
      <Switch> */}
    <Route exact path={match.url} component={Master} />
    <Redirect exact from={`${match.url}${RouterPathList.Master}`} to={match.url} />
    <Route path={`${match.url}${RouterPathList.Master}/:id`} component={Master} />
    <Route render={() => <Redirect to={RouterPathList.NotFound} />} />
    {/* </Switch>
    </React.Suspense> */}
  </IonRouterOutlet>
)

export default MainLayoutRouter
