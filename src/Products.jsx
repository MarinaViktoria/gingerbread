import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";

function Products({ gingerbread }) {
  const dispatch = useDispatch();

  return (
    <div className="allProducts">
      {gingerbread.map((item) => {
        const { id, image, name, price } = item;
        return (
          <div className="product-card" key={id}>
            <img src={image} alt="ginger bread" />
            <h3 className="title">{name}</h3>
            <p className="price">EUR {price}</p>

            <button onClick={() => dispatch(addToCart(item))}>В корзину</button>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
