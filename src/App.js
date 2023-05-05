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
import Login from './login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Navigation/> */}
    <Routes>
          <Route exact path="/" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }/>
          {/* <Route index element={<Login/>}/> */}
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="home" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route exact path="createStockPO" element={<PrivateRoute><CreateStockPO/></PrivateRoute>}/>
          <Route exact path="createStockIF" element={<PrivateRoute><CreateStockIF/></PrivateRoute>}/>
          <Route exact path="productList" element={<PrivateRoute><ProductList/></PrivateRoute>}/>
          <Route exact path="productCategoryList" element={<PrivateRoute><ProductCategoryList/></PrivateRoute>}/>
          <Route exact path="productBrandList" element={<PrivateRoute><ProductBrandList/></PrivateRoute>}/>
          <Route exact path="editItemAllocation" element={<PrivateRoute><EditItemAllocation/></PrivateRoute>}/>
          <Route exact path="assetRequestList" element={<PrivateRoute><AssetrequestList/></PrivateRoute>}/>
          <Route exact path="changeOfUseList" element={<PrivateRoute><ChangeOfUseList/></PrivateRoute>}/>
          <Route exact path="listSO" element={<PrivateRoute><ListSO/></PrivateRoute>}/>
          <Route exact path="werehouseDelivery" element={<PrivateRoute><WerehouseDelivery/></PrivateRoute>}/>
          <Route exact path="werehouseReceptionList" element={<PrivateRoute><WerehouseReceptionList/></PrivateRoute>}/>
          <Route exact path="bappbTagList" element={<PrivateRoute><BappbTagList/></PrivateRoute>}/>
    </Routes>
    </div>
  );
}

export default App;
