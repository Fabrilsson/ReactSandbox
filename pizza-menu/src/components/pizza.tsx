import PizzaEntity from "../types/pizza";

export interface PizzaProps {
  pizza: PizzaEntity;
}

function Pizza({ pizza }: PizzaProps) {
  // if (pizza.soldOut) return null;

  return (
    <li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
