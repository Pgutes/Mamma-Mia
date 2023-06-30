import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { PizzasContext } from '../context/PizzasContext';

const Nav = () => {
  const {total} = useContext(PizzasContext);
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link className='navbar-brand' to="/" >Pizzería Mamma Mía</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <Link className='nav-link' to="/carrito">Carrito</Link>
      <span className='badge bg-primary'>${total}</span>
    </div>
  </div>
</nav>

    )
}

export default Nav