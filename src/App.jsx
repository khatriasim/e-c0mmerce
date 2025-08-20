import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import productsData from './data/products.json';

function App() {

  const [cartItems, setcartItems] = useState([])
const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
        setcartItems(cartItems.map(item => 
            item.id === product.id 
                ? {...item, quantity: item.quantity + quantity}
                : item
        ))
    } else {

        setcartItems([...cartItems, {...product, quantity}])
    }
}

  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home product={productsData} addToCart={addToCart}/>} />
          <Route path="/product/:id" element={<ProductDetails product={productsData}/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          
       </Routes>
    </Router>
  );
}

export default App;