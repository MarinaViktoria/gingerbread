import { useDispatch } from "react-redux";
import { filterByCategory } from "./store/productsSlice";

function Buttons() {
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      <button className="btn" onClick={() => dispatch(filterByCategory("Все"))}>
        Все
      </button>
      <button
        className="btn"
        onClick={() => dispatch(filterByCategory("Видеоигры"))}
      >
        Видеоигры
      </button>
      <button
        className="btn"
        onClick={() => dispatch(filterByCategory("Любимые персонажи"))}
      >
        Любимые персонажи
      </button>
      <button
        className="btn"
        onClick={() => dispatch(filterByCategory("День рождения"))}
      >
        День рождения
      </button>
      <button
        className="btn"
        onClick={() => dispatch(filterByCategory("Рождество"))}
      >
        Рождество
      </button>
      <button
        className="btn"
        onClick={() => dispatch(filterByCategory("Школа"))}
      >
        Школа
      </button>
      <button
        className="btn"
        onClick={() => dispatch(filterByCategory("Разное"))}
      >
        Разное
      </button>
    </div>
  );
}
export default Buttons;
