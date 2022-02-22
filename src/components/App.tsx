import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { collection, getDocs } from "@firebase/firestore"
import { database } from '../config/firebase';
import MainContent from './MainContent';

const UserList = lazy(() => import('./UserList'))
const AddUser = lazy(() => import('./AddUser'))

const App = () => {
  const [users, setUsers] = useState<any[]>([])

  return (
    <Suspense fallback={
      <div>Loading...</div>
    }>
      <MainContent>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/add-user" component={AddUser} />
      </Switch>
      </MainContent>
      </Suspense>
  )
}

export default App;
