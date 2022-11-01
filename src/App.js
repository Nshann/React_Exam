//1// import { useState } from 'react';

const { useState, useEffect } = require("react");

// function App() {
//   const [count, setCount] = useState(0);

//   function minusCount() {
//     if(count !== 0){
//       setCount(naxordCount => naxordCount -1)
//     }
//     // setCount(naxordCount => naxordCount - 1)
//   }

//   function plusCount() {
//     setCount(naxordCount => naxordCount + 1)
//   }

//   return (
//     <div>
//       <button onClick={plusCount}>+</button>
//       <span>{count}</span>
//       <button onClick={minusCount}>-</button>
//     </div>
//   );
// }
// export default App;
//............................................
//2
// function App() {
//   const [title, setTitle] = useState("");
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch("api.github.com/users")
//     .then(strem => strem.json())
//     .then(results => setData(results.data))
//   }, [])
//   <p>Արամ ախպեր էս տվածտ լինկը սխալա</p>
// }
//..................................................
//3//=> navbar.js
//..................................................
//4Քօփի եմ արե
// import {useEffect, useRef, useState} from 'react';

// export default function App() {
//   const bottomRef = useRef(null);

//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setInterval(
//       () =>
//         setMessages(current => [
//           ...current,
//           'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, quaerat eum id obcaecati, magnam voluptatum dolorem sunt, omnis sed consectetur necessitatibus blanditiis ipsa? Cumque architecto, doloribus mollitia velit non sint!',
//         ]),
//       600,
//     );
//   }, []);

//   useEffect(() => {
//     // 👇️ scroll to bottom every time messages change
//     bottomRef.current?.scrollIntoView({behavior: 'smooth'});
//   }, [messages]);

//   return (
//     <div>
//       <h2>Top of the page</h2>

//       <div>
//         {messages.map((message, index) => {
//           return <p key={index}>{message}</p>;
//         })}

//         <div ref={bottomRef} />
//       </div>
//     </div>
//   );
// }

// useEffect(() => {
//   bottomRef.current?.scrollIntoView({behavior: 'smooth'});
// }, [messages]);
//........................................................
//5// => Todo.js
