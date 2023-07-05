import { Switch,Route } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import Dashboard from './Components/Dashboard';
import Listusers from './Components/Listusers.js';
import CreateUser from './Components/CreateUser';
import { useState } from 'react';
import EditUser from './Components/EditUser';
import data from './Data/data';

function App() {
  const [users,setUsers]=useState(data)
  
  return (
    <div className="App">
    <Switch>
      <Route exact path='/'>
        <Dashboard/>
      </Route>

      <Route path='/users'>
        <Listusers
          users={users}
          setUsers={setUsers}
        />
      </Route>

      <Route path='/create-user'>
        <CreateUser
          users={users}
          setUsers={setUsers}
        />
      </Route>


      {/* Id is called a params so we using params */}
      <Route path="/edit-user/:id">
        <EditUser
            users={users}
            setUsers={setUsers}
        />
      </Route>
    </Switch>
    
   
    

      
    </div>
  );
}

export default App;
