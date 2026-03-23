import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Home";
import Shop from "./Shop";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Cart from "./Cart";

function App() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Router>
      <nav>
        <Link to="/" className="link">
          Главная
        </Link>
        <Link to="shop" className="link">
          Пряники
        </Link>
        <Link to="faq" className="link">
          Часто задаваемые вопросы
        </Link>
        <Link to="contact" className="link">
          Контакт
        </Link>
        <Link to="/cart" className="link">
          Корзина ({totalQuantity})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default App;
