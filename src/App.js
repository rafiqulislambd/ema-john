import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';





function App() {

  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
    
  }, [])

  
   
   

 
 
 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         My First React app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


       
        
       <Counter> </Counter>
       <h2 style={style}>Total User : {users.length}</h2>

       {users.map(person => <Person user={person} key={person.id}> </Person>)}

       {fruits.map(fruit => <Fruits fruits={fruit}></Fruits> )}
      

        
      </header>
    </div>
  );
}






const style ={
  border: '1px solid gray',
  borderRadius: '5px',
  backgroundColor: '#943f3f',
  padding: '10px',
  margin: '8px',
  width: '550px',
  float: 'left'
}



function Person(props){

 return (

    <div style={style}> 
      <ul style={{padding:'0px'}}> 
        <h2>Name: {props.user.name} </h2>
        <p>Email: {props.user.email} </p>
        
      </ul>
      <button>Buy Now</button>
    </div>


 );
}


const fruits = [
  {fName: 'Apple', fColor: 'Green', fCountry: 'India'},
  {fName: 'Mango', fColor: 'red', fCountry: 'Bangladesh'}
];

const fruitStyle ={
  width: '600px',
  backgroundColor: '#673ab7',
  margin: '10px',
  padding: '10px',
  border: '1px solid red'
}

function Fruits(props){
  return (
    <div style={fruitStyle}>
        <h3>{props.fruits.fName}</h3>
        <h3>{props.fruits.fColor}</h3>
        <h3>{props.fruits.fCountry}</h3>
    </div>
  )
}



function Counter(){
  let [count, setCount] = useState(0);

  const Enenthend = () => {
    const newCount = count + 1;
    setCount(newCount);

  }

  return (
    <div style={fruitStyle}>
        <h3>Counter: {count} </h3>
        <button onClick={Enenthend}> increase </button>
    </div>
  )
}






export default App;
