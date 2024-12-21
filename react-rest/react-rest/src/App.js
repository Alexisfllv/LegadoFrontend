import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { getCategories } from './service/categoryService';

function App() {

  //hoks
  const[list,setList] = useState([]);
  useEffect( ()=> {
    getCategories().then(response => setList(response.data));
  },[]);

  return (
    
    <>
    <h1>Categories</h1>
    <ul>
      {list.map(item => <li key={item.idCategory}>{item.nameofCategory} </li>)}
    </ul>
    </>
  );
}

export default App;
