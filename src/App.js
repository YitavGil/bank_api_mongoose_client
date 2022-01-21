import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import User from './comps/User';


function App() {
  const [name, setName] = useState("")
  const [user, setUser] = useState()

async function getUser(e) {
  e.preventDefault();

  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users?name=${name}`);
  setUser(data[0])
  console.log(data);
  };
  return (
    <div className="App">
     <h1>Help Me</h1>
     <form onSubmit={getUser}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit'>send</button>
     </form>
     {user && <User user={user} />}
    </div>
  );
  }


export default App;