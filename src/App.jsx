import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import productsData from './data/products.json';

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home product={productsData}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails product={productsData}/>} />
          <Route path="/checkout" element={<Checkout />} />
          
       </Routes>
    </Router>
  );
}

export default App;