import { useEffect, useState } from 'react';
import { UserList } from './UserList';
import { collection, getDocs } from "@firebase/firestore"
import { database } from '../config/firebase';
import MainContent from './MainContent';




const App = () => {
  const [users, setUsers] = useState<any[]>([])

  return (
    <MainContent>
      <UserList />
    </MainContent>
  )
}

export default App;
