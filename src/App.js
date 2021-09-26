import React from 'react';
import NavBar from './NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default App













// import React,{useState} from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Card from './Card';
// import Menu from './Menu'
// import Button from './Button';


// const allDataArray = [ ...new Set(Menu.map((firstElement) =>firstElement.name)),"all"];
// console.log(allDataArray);

// const App = () => {
//   const[items,setItems] = useState(Menu);
//   const[setCat,setCatItems] = useState(allDataArray);
//   const filterItems = (category) => {
//     if(category === 'all'){
//       return setItems(Menu);
//     }
//     const myAllData = Menu.filter((curElem)=>{
//       return curElem.name === category;
//     });
//     setItems(myAllData);
//   }
//   const myFunction = () =>{
//     setItems(Menu);
//   }
//   return (
//     <>
//     <Button
//       filterItems={filterItems}
//       myFunction={myFunction}
//       setCat={setCat}
//     />
//     <Card
//       items={items}
//     />
//     </>
//   )
// }

// export default App
