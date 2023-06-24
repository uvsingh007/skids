import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import uuid from 'react-uuid';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([
    {
      id:uuid(),
      fName: "Baburao",
      lName: "Ganpatrao Apte",
      email: "Baburaoganpatraoapte@gmail.com",
      phone: 9999999999,
    },
    {
      id:uuid(),
      fName: "Raghu",
      lName: "Nandan",
      email: "MerePecheVo@gmail.com",
      phone: 9999999999,
    },
    {
      id:uuid(),
      fName: "Ganesh",
      lName: "N/A",
      email: "chotiGangaMeKudaDiya@gmail.com",
      phone: 9999999999,
    },
  ])
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={ <Users users={users} setUsers={setUsers} />}></Route>
        <Route exact path="/form" element={ <Form users={users} setUsers={setUsers} />}></Route>
      </Routes>
    </Router>
    {/* <Form users={users} setUsers={setUsers} /> */}
    </div>
  );
}

export default App;
