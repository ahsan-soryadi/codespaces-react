import Home from './menu/Home';
import Navigation from './Navigation';
import {Routes, Route} from 'react-router-dom';
import ProductList from './menu/ProductCatalogue/ProductList';
import ProductCategoryList from './menu/ProductCatalogue/ProductCategoryList';
import ProductBrandList from './menu/ProductCatalogue/ProductBrandList';
import WerehouseDelivery from './menu/TAG/WerehouseDelivery';
import BappbTagList from './menu/TAG/BappbTagList';
import WerehouseReceptionList from './menu/TAG/WerehouseReceptionList';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route exact path="productList" element={<ProductList/>}/>
          <Route exact path="productCategoryList" element={<ProductCategoryList/>}/>
          <Route exact path="productBrandList" element={<ProductBrandList/>}/>
          <Route exact path="werehouseDelivery" element={<WerehouseDelivery/>}/>
          <Route exact path="werehouseReceptionList" element={<WerehouseReceptionList/>}/>
          <Route exact path="bappbTagList" element={<BappbTagList/>}/>
    </Routes>
    </div>
  );
}

export default App;
