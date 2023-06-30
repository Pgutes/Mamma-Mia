import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";


export const PizzasContext = createContext();

export const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const {data, loading, error} = useFetch("/pizzas.json");
    
    useEffect(() => {
        if (data) {
            setPizzas(data);
        }
    }, [data]);

        const addToCart = (pizza) => {
        const findProductIndex = carrito.findIndex((item) => item.id === pizza.id);
        const product= {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            img: pizza.img,
            count: 1,
            description: pizza.description,
        };
        if (findProductIndex >= 0) {
            carrito[findProductIndex].count++;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, product]);
        }
    };
    const increment=(index) => {
        carrito[index].count++;
        setCarrito([...carrito]);
    };
    const decrement=(index) => {
        if (carrito[index].count === 1) {
            carrito.splice(index, 1);
        } else {
            carrito[index].count--;
        }
        setCarrito([...carrito]);
    };
    const total = carrito.reduce((acc, item) => acc+(item.price*item.count), 0);

    const PizzasProviderValues = {
        pizzas,
        carrito,
        setCarrito,
        addToCart,
        increment,
        decrement,
        total,
    };

    return (
        <PizzasContext.Provider value={PizzasProviderValues}>
            {children}
        </PizzasContext.Provider>
    );

};

