import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import ChatScreen from './pages/chatScreen';
import PostScreen from './pages/postScreen';
// function myFunc(message,counter)
// {
//   const msgArray = [] 
//     var eventFire = (MyElement, ElementType) => {
//         var MyEvent = document.createEvent("MouseEvents");
//         MyEvent.initMouseEvent(ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//         MyElement.dispatchEvent(MyEvent);
//     };
//  messageBox = document.querySelectorAll("[contenteditable='true']")[1];
//  for (i = 0; i < counter; i++) {
//   const event = document.createEvent("UIEvents");
// //   messageBox.innerHTML = message.replace(/ /gm, ''); // test it
// const message = msg[Math.floor(Math.random()*5)]
//     messageBox.innerHTML = message
//   event.initUIEvent("input", true, true, window, 1);
//   messageBox.dispatchEvent(event);
//   eventFire(document.querySelector('span[data-icon="send"]'), 'click');
//  }
// } 
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
