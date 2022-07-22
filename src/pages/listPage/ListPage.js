import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import ListView from '../../components/listView/ListView';
import './listPage.scss';

/* • Pagina donde se visualizará la lista de los productos.
• Esta pagina, se mostrarán todos los elementos que nos devuelve la petición del API
• Permitirá el filtrado del contenido en función del criterio de busqueda que el usuario
introduzca
• Al seleccionar un producto, deberá navegar a los detalles del mismo.
• Se mostrarán un maximo de cuatro elementos por fila, y que sea adaptativo segun la
resolución. */

export const ListPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://front-test-api.herokuapp.com/api/product')
      .then( response => response.json() )
      .then( data => setData(data) )
      .catch( error => console.log( error ) )
  }, []);


  return (
    <>
      <Header />
      <ListView data={data}/>
      <div className='list-view'>ListView</div>
    </>
  );
};
