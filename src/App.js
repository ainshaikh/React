import logo from './logo.svg';
import './App.css';
import { useState, React, useEffect} from 'react';

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Todos from "./Components/Todos";

function App() {
  const [count, setCounter] = useState(0)

  useEffect ( ()=>{
    console.log("component mounted");
  },[])

  function updateCount(){
    setCounter(count+1)
  }

  function updateCountinNegative (){
    setCounter (count-1)
  }
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
  
    <h1>Button clicked {count}</h1>
    <button onClick = {updateCount}>click for increasing</button>
    <button onClick={updateCountinNegative}>click for decreasing </button>
   
  {/* /* <Header title = "My Todo List" searchBar = {false}/>
  <Todos todos={todos}/>
  <Footer/> */}

   </>
  );
}

export default App;
