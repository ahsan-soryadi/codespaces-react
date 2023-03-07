import './App.css';
import Home from './menu/Home'
import Navigation from './Navigation';
import {Routes, Route} from 'react-router-dom';
import WerehouseDelivery from './menu/TAG/WerehouseDelivery';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route exact path="werehouseDelivery" element={<WerehouseDelivery/>}/>
          {/* <Route path="/create">
            <Create/>
          </Route>
          <Route path="/getBlog/:id">
            <DetailBlog/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route> 
           <Route path="/generateCode">
            <GenerateCode/>
          </Route> 
          <Route path="*">
            <NotFound/>
          </Route> */}
    </Routes>
    </div>
  );
}

export default App;
