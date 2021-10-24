import AddUser from './Components/Users/AddUser';
import React, {useState} from 'react';
import UserList from './Components/Users/UserList';



function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList user={userList} />
    </div>
  );
}

export default App;
