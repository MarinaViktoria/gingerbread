import { useSelector } from "react-redux";
import Products from "./Products";
import Buttons from "./Buttons";
import "./App.css";

function Shop() {
  const gingerbread = useSelector((state) => state.products.filtered);

  return (
    <div className="shop-container">
      <Buttons />
      <Products gingerbread={gingerbread} />
    </div>
  );
}
export default Shop;
