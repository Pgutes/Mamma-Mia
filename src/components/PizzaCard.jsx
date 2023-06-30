import React, { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';
import { useNavigate } from 'react-router-dom';

const PizzaCard = ({ pizza }) => {
    const { addToCart } = useContext(PizzasContext);
    const {ingredients} = pizza;

    const navigate= useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${pizza.id}`);
    }
    const cardStyle = {
        width: '100%',
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
        borderRadius: '5px',
        transition: '0.3s',
        cursor: 'pointer',
        }
        const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        };

    return (
        <div style={cardStyle} className="card">
            <img style={imgStyle} src={pizza.img} alt={pizza.name} />
            <div className="card-body">
                <h4 className="card-title">{pizza.name}</h4>
                <ul className="list-group">
                    {ingredients.map((ingredient, index) => (
                        <li className="list-group-item" key={index}>🍕 {ingredient}</li>
                    ))}
                </ul>
                <p className="card-text">Valor: $ {pizza.price}</p>
                <div className='d-flex justify-content-between'>
                <button onClick={() => addToCart(pizza)} className="btn btn-primary">añadir al carrito</button>
                <button onClick={handleNavigate} className="btn btn-primary">Detalles</button>
                </div>
            </div>
        </div>
    );
};


export default PizzaCard;