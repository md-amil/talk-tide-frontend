import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import ChatScreen from './pages/chatScreen';
import PostScreen from './pages/postScreen';

function App() {
  // const [conversations,setConversations] = useState([
  //   "amil",
  //   "diksha",
  //   "ram",
  //   "sahil"
  // ])
  // const handleAdd = ()=>{
  //   setConversations([...conversations,"new user"])
  // }
  return (
    // <ChatScreen/>
    <PostScreen/>
  //   <div className="App">
  //     {conversations.map((conversion) => (
  //   <div
  //     onClick={() => console.log("hello")}
  //     key={conversion._id}
  //   >
  //     {conversion}
  //   </div>
  // ))}
  // <button onClick={handleAdd}>add</button>
  //   </div>
  );
}

export default App;
