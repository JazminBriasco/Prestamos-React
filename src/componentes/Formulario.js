import React, {Fragment, useState} from 'react'


const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo}) => {


//Definimos un useState para usarlo de una manera más local, de otra manera no lo importaría    
const [error, guardarError]= useState(false);

const calcularPrestamo = e =>{
    e.preventDefault();
    if(cantidad === 0 || plazo === ''){
        guardarError(true);
    }else{
        guardarError(false);
    }
}


   return (
       <Fragment>
        <form onSubmit ={calcularPrestamo}>
            {cantidad}
            {plazo}
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                       // onChange = {leerCantidad}
                        onChange = {e => guardarCantidad(e.target.value)}                    
                       />
                </div>
            <div>
            <label>Plazo para Pagar</label>
            <select 
                className="u-full-width"
                onChange = {e => guardarPlazo(e.target.value)}
            >
                <option value="">Seleccionar</option>
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
            </select>
            </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
  {(error) ?  <p className ="error">Todos los campos deben ser obligatorios</p>: '' }

  </Fragment>
    );
}


export default Formulario;