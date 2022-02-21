import { useEffect, useState } from 'react';
import {Provider} from 'react-redux';
import { store } from '../state'
import { UserList } from './UserList';
import { collection, getDocs } from "@firebase/firestore"
import { database } from '../config/firebase';

const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    address2: 'Apt. 1',
    town: 'Anytown',
    region: 'CA',
    country: 'USA',
    postCode: '12345',
    contactNumber: '123-456-7890',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    address1: '123 Main St',
    address2: 'Apt. 1',
    town: 'Anytown',
    region: 'CA',
    country: 'USA',
    postCode: '12345',
    contactNumber: '123-456-7890',
  },
]

const App = () => {
  const [users, setUsers] = useState<any[]>([])
  const usersCollectionRef = collection(database, 'users')

  useEffect(() => {
    
    const getUsers = async () => { 
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers()
  }, [])
  

  return <Provider store={store}>
    <div>
      <h1>users</h1>
      <ul>
      {users && users.map((user) => (
        <li>{user.first_name}</li>
      ))}
      </ul>
      <UserList />
    </div>
  </Provider>;
  
}

export default App;
