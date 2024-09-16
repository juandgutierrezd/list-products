/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from 'react'
export default function Tarjeta({data,selecciones,setSelecciones}) {



    const onClick = () =>{  
      const seleccion = selecciones.find((seleccion) => seleccion.id === data.id);
  
      if(seleccion){
        console.log("existent element")
        const updatedSelecciones = selecciones.map((item) => 
          item.id === data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        //seleccion.quantity += 1;
        //console.log(seleccion)
        setSelecciones(updatedSelecciones);
      }else{
        console.log("Nuevo")
        const nuevoElemento = {
          id: data.id,
          name: data.name,
          price: data.price,
          quantity: 1
        }
        //console.log(nuevoElemento)
        setSelecciones([...selecciones, nuevoElemento])
      }
    }
    
    return (
    <>
          <div className='w-full '>
            <div className=' mb-1 text-center'> 
            <img src={`${data?.image?.desktop}`} alt="imagen postre" className='w-full rounded-xl'/>
            <button className=' bg-white rounded-md p-2' onClick={onClick}>
              Add To Cart</button>
            </div>
            <div>
              <span>{data.category}</span>
              <p>{data.name}</p>
              <h2>{data.price}$</h2>
            </div>
          </div>
    </>
  )
}
