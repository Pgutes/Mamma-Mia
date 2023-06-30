
import React, {useContext} from 'react';
import { PizzasContext } from '../context/PizzasContext';
import PizzaCard from '../components/PizzaCard';

const Home = () => {
    const {pizzas}  = useContext(PizzasContext);
    return (
        <div className="mt-5">
            <div className='d-flex justify-content-center'>
                <h1>Todas Nuestras Pizzas</h1>
            </div>
            {pizzas && (
                <div className='row'>
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className='col-sm-4 my-2'>
                            <PizzaCard pizza={pizza}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;