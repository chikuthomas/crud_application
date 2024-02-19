import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Items from './pages/products';
import AddItem from './pages/add_product';

function App() {


  return (

    <Router>
      <Routes>
        <Route exact path='/' Component={Items} />
        <Route  path='/add-product' Component={AddItem} />
      </Routes>
    </Router>


  );

}

export default App
