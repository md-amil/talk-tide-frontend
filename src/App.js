import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [conversations,setConversations] = useState([
    "amil",
    "diksha",
    "ram",
    "sahil"
  ])
  const handleAdd = ()=>{
    setConversations([...conversations,"new user"])
  }
  return (
    <div className="App">
      {conversations.map((conversion) => (
    <div
      onClick={() => console.log("hello")}
      key={conversion._id}
    >
      {conversion}
    </div>
  ))}
  <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default App;
