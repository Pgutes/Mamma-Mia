import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { useParams } from "react-router-dom";

const Products = () => {
  const {pizzas, addToCart} = useContext(PizzasContext);
  const {id} = useParams();

  const pizza = pizzas.find(pizza => pizza.id === id);

  return (
    <div className="mt-5">
      {pizza && (
        <div className="card mt-5">
          <div className="row g-0">
            <div className="col-md-4 p-3">
              <img src={pizza.img} width={350} alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p>{pizza.desc}</p>
                <p>Ingredientes: </p>
                <ul className="list-group">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li className="list-group-item" key={index}>{ingredient}</li>
                  ))}
                </ul>
                <hr />
                <h5>Precio: {pizza.price}</h5>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => addToCart(pizza)}>Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products;