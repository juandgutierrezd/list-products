/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState,useEffect } from 'react'
import TarjetaCarrito from './TarjetaCarrito'

export default function Carrito({selecciones,setSelecciones}) { 

const [totalCompra,setTotalCompra] = useState(0)
const [modal,setModal] = useState(false)

  useEffect(()=>{
    let total = 0;
    selecciones.forEach(seleccion=> total += seleccion.price * seleccion.quantity)
    setTotalCompra(total)
  },[selecciones])

  const confirmOrder = () => {
    alert("Su orden ha sido confirmada")
    setModal(true)
    console.log("Orden confirmada su compra fue de: ", selecciones, "Un Total de: ",totalCompra)
  }
 
  return (
    <>
        {modal ? (
          <>
          <div className='bg-white'>
            <div>Compra Realizada</div>
            <div>
              {
                selecciones.map((seleccion)=>(
                  <div key={seleccion.id}>
                    <p>Producto: {seleccion.name} - Cantidad: {seleccion.quantity}</p>
                  </div>
                ))
              }


              Total: ${totalCompra}
            </div>
            <button className='w-full bg-[#B74125] text-white font-medium py-3 rounded-3xl mt-2 hover:bg-[#e05a39]' onClick={()=>{
              setModal(false)
              setSelecciones([])
              setTotalCompra(0)
              }}>Nueva Compra</button>
          </div>    
          </>
        ):(
          <>
         <div className='bg-white'>
          {
            selecciones.map((seleccion)=>(
              <TarjetaCarrito
                key={seleccion.id}
                seleccion={seleccion}
                selecciones={selecciones}
                setSelecciones={setSelecciones}
              />
            ))
          }
          
          <div className='flex justify-between items-center mx-2 m-2'>
            <p>Orden Total</p> <span className='text-4xl font-bold'>${totalCompra}</span>
          </div>
          <button className='w-full bg-[#B74125] text-white font-medium py-3 rounded-3xl hover:bg-[#e05a39]' onClick={confirmOrder}> Confirmar Orden</button>
        </div>
          </>
        )}
       
    </>
  )
}
