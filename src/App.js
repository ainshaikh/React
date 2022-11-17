import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Todos from "./Components/Todos";

function App() {

  const refElement = useRef("");     // useRef- use to manipulate the DOM
  const [name, setName] = useState("Ain")
  console.log(refElement);
  function reset (){
    setName ("")
    refElement.current.focus()
  }

  function colorChange (){
    refElement.current.style.color = "red";
    refElement.current.value = "Pushpa"
  }
  // const [count, setCounter] = useState(0)

  // useEffect ( ()=>{
  //   console.log("component mounted");
  // },[])

  // function updateCount(){
  //   setCounter(count+1)
  // }

  // function updateCountinNegative (){
  //   setCounter (count-1)
  // }
  // let todos = [
  //  {
  //   Sno: 1,
  //   Title: "Go to the market",
  //   description: "You need to go the market"
  //  },
  //  {
  //   Sno: 2,
  //   Title: "Go to the mall",
  //   description: "You need to go the mall"
  //  },
  //  {
  //   Sno: 3,
  //   Title: "Go to the home",
  //   description: "You need to go the home"
  //  },

  // ]
  
  return (
    <>
  
    <h1> Learning useRef</h1>
    <input ref = {refElement} type="text" value={name} onChange = {(e)=> setName(e.target.value)}></input>
    <button onClick={reset}> Reset </button>
    <button onClick={colorChange}>Change color</button>
    
   
  {/* /* <Header title = "My Todo List" searchBar = {false}/>
  <Todos todos={todos}/>
  <Footer/> */}

   </>
  );
}

export default App;
