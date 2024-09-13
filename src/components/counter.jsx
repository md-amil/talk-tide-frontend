import { useState } from "react";
let stateless = 0

export default function Counter({color,title}) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ background: "#f3f3f3", padding: 50 }}>
        <p>{title}</p>
        <p>{stateless}</p>
      <p style={{ fontSize: 20 ,color:color,padding:10}}>{count}</p>
      <button onClick={() =>{
        setCount(count + 1) 
        stateless = stateless+1
        console.log({stateless})
      } }>increase</button>
    </div>
  );
}
