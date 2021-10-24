import AddUser from './Components/Users/AddUser';
import React from 'react';
import UserList from './Components/Users/UserList';


function App() {
  return (
    <div>
      <AddUser />
      <UserList user={[]} />
    </div>
  );
}

export default App;
