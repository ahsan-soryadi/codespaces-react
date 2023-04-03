import Home from './menu/Home';
import Navigation from './Navigation';
import {Routes, Route} from 'react-router-dom';
import ProductList from './menu/ProductCatalogue/ProductList';
import ProductCategoryList from './menu/ProductCatalogue/ProductCategoryList';
import ProductBrandList from './menu/ProductCatalogue/ProductBrandList';
import WerehouseDelivery from './menu/TAG/WerehouseDelivery';
import BappbTagList from './menu/TAG/BappbTagList';
import WerehouseReceptionList from './menu/TAG/WerehouseReceptionList';
import CreateStockPO from './menu/CreateStock/CreateStockPO';
import CreateStockIF from './menu/CreateStock/CreateStockIF';
import EditItemAllocation from './menu/Edit/EditItemAllocation';
import AssetrequestList from './menu/Usage/AssetRequestList';
import ChangeOfUseList from './menu/Usage/ChangeOfUseList';
import ListSO from './menu/StockOpname/ListSO';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route exact path="createStockPO" element={<CreateStockPO/>}/>
          <Route exact path="createStockIF" element={<CreateStockIF/>}/>
          <Route exact path="productList" element={<ProductList/>}/>
          <Route exact path="productCategoryList" element={<ProductCategoryList/>}/>
          <Route exact path="productBrandList" element={<ProductBrandList/>}/>
          <Route exact path="editItemAllocation" element={<EditItemAllocation/>}/>
          <Route exact path="assetRequestList" element={<AssetrequestList/>}/>
          <Route exact path="changeOfUseList" element={<ChangeOfUseList/>}/>
          <Route exact path="listSO" element={<ListSO/>}/>
          <Route exact path="werehouseDelivery" element={<WerehouseDelivery/>}/>
          <Route exact path="werehouseReceptionList" element={<WerehouseReceptionList/>}/>
          <Route exact path="bappbTagList" element={<BappbTagList/>}/>
    </Routes>
    </div>
  );
}

export default App;
