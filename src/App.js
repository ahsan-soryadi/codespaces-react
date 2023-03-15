import './App.css';
import Home from './menu/Home'
import Navigation from './Navigation';
import {Routes, Route} from 'react-router-dom';
import WerehouseDelivery from './menu/TAG/WerehouseDelivery';
import ProductList from './menu/ProductCatalogue/ProductList';
import WerehouseDeliveryList from './menu/TAG/WerehouseDeliveryList';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route exact path="productList" element={<ProductList/>}/>
          <Route exact path="werehouseDelivery" element={<WerehouseDelivery/>}/>
          <Route exact path="werehouseDeliveryList" element={<WerehouseDeliveryList/>}/>
    </Routes>
    </div>
  );
}

export default App;
