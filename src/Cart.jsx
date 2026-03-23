import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./store/cartSlice";

function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Корзина</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Количество: {item.quantity}</p>
          <p>Цена: {item.price}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Удалить
          </button>
        </div>
      ))}

      <h3>Итого: {totalPrice} EUR</h3>

      <button onClick={() => dispatch(clearCart())}>
        Очистить корзину
      </button>
    </div>
  );
}

export default Cart;