import React from 'react';
import ListadoBase from './ListadoBase';
import Ingreso from './Ingreso';

export const Main = () => {
    return(
        <>
          <div>
            <h1> TITULO </h1>
          </div>
          <div>
            <ListadoBase />
          </div>
          <div>
            <Ingreso />    
          </div>
        </>
    );
}

export default Main;