import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Carrito from '../pages/Carrito';

const AppRoutes = () => {
    return (
        <Routes> 
            <Route path="/" element={<Home/>}/> 
            <Route path="/product/:id" element={<Products/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
        </Routes>

    )
}

export default AppRoutes