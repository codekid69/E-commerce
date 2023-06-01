import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddProducts, Home, Cart, Product, NotFound,ConfirmOrder } from "./pages";
import { Navbar,Loader,Item,ItemList,FilterData,Counter,Footer} from "./components";
import './styles/home.css';
import './styles/cart.css';
import './styles/product.css';
import './styles/addproduct.css';
import './styles/notfound.css';
import './styles/loader.css';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmorder" element={<ConfirmOrder/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
