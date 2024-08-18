import './App.css';
import Header from './containers/Header';
import ProductComponents from './containers/ProductComponents';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetails}/>
          <Route path="*" element={<div>404 Page Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
