import { useEffect, useState } from 'react'

import './App.css'
import { getCategories } from './service/categoryService';

interface Category {
  idCategory : number;
  nameofCategory : string;
}

function App() {
  const [list, setList] = useState<Category[]> ([])

  useEffect( ()=> {
    getCategories().then(response => setList(response.data));
  },[])

  return (
<>
    <h1>Categories</h1>
    <ul>
      {list.map(item => <li key={item.idCategory}>{item.nameofCategory} </li>)}
    </ul>
    </>
  )
}

export default App
