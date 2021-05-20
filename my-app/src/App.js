import logo from './logo.svg';
import styles from './App.css';
import React, {useState}from "react";
const types=['Select 1','Select 2','Select 3'];

// function Toggle(){
//   const[active,setActive]=useState(0)

//   console.log("hhhgfhghf")
//   <div>
//     {types.map(type =>{
//       {console.log("dshdg")}
//       <h1>{type}</h1>
//     })}


//   </div>

// }
// const toggle = types.map(type => <button>{type}</button>);

  function App() {
  console.log(types)
  const [activeButton, setactiveButton] = useState(-1);
  const [title, setTitle] = useState('');
//   const someFunct=(name)=>{
//     setActive(name);
//  }
 const handleClick = (e,index) => {
   //alert(index)
  //  alert(buttonState)
  //  alert(index)
  setactiveButton(index)
  setTitle('Select'+ (index+1))
 }
 //alert(activeButton)
 // const [active,setActive]=useState(false)
  return (
    <div >
       {types.map((type,index) => {
        return <button
                 type="button"
                 key={index}
                
                 name ={type}
                 disabled={activeButton === index ? true  :false}
                 value={type}
                 onClick={() => {handleClick(this,index)}}
                  > {type}</button>;
   })}
     {/* <button onClick={e=>{setActive(true)} }>CLick 1</button>
     <button disabled={active}>Click 2</button>     */}
     <div id="view">
       {title}
     </div>
    </div>
  );
}

export default App;
