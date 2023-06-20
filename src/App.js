import Home from './menu/Home';
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
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import GudangPusatRoute from './GudangPusatRoute';
import NotFoundPage from './NotFoundPage';
import AccessDenied from './AccessDenied';

function App() {
  // console.log("user data in main app : ", user)
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="home" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route exact path="createStockPO" element={<PrivateRoute><GudangPusatRoute><CreateStockPO/></GudangPusatRoute></PrivateRoute>} />
          <Route exact path="createStockIF" element={<PrivateRoute><GudangPusatRoute><CreateStockIF /></GudangPusatRoute></PrivateRoute>} />
          <Route exact path="productList" element={<PrivateRoute><ProductList /></PrivateRoute>} />
          <Route exact path="productCategoryList" element={<PrivateRoute><ProductCategoryList /></PrivateRoute>} />
          <Route exact path="productBrandList" element={<PrivateRoute><ProductBrandList /></PrivateRoute>} />
          <Route exact path="editItemAllocation" element={<PrivateRoute><EditItemAllocation /></PrivateRoute>} />
          <Route exact path="assetRequestList" element={<PrivateRoute><AssetrequestList /></PrivateRoute>} />
          <Route exact path="changeOfUseList" element={<PrivateRoute><ChangeOfUseList /></PrivateRoute>} />
          <Route exact path="listSO" element={<PrivateRoute><ListSO /></PrivateRoute>} />
          <Route exact path="werehouseDelivery" element={<PrivateRoute><WerehouseDelivery /></PrivateRoute>} />
          <Route exact path="werehouseReceptionList" element={<PrivateRoute><WerehouseReceptionList /></PrivateRoute>} />
          <Route exact path="bappbTagList" element={<PrivateRoute><BappbTagList /></PrivateRoute>} />
          <Route exact path="accessDenied" element={<AccessDenied/>}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
