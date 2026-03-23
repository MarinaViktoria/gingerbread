import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart } from "./store/cartSlice";
import "./App.css";

function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Корзина</h2>

      {items.length === 0 ? (
        <p className="empty">Корзина пуста</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{item.price} EUR</p>

                  <div className="quantity">
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Итого</h3>
            <p>{totalPrice.toFixed(2)} EUR</p>

            <button onClick={() => dispatch(clearCart())}>
              Очистить корзину
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
