
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'

export default function TarjetaCarrito({seleccion,selecciones,setSelecciones}) {
    const [total,setTotal] = useState(0)
    
    useEffect(() => {
        setTotal(seleccion.quantity * seleccion.price)
    }, [seleccion.quantity])

    const quitarUnElemento = () => {
      if (seleccion.quantity > 1) {
            const nuevasSelecciones = selecciones.map(item =>
                item.id === seleccion.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            setSelecciones(nuevasSelecciones);
        }
    }

    const eliminarUnElemento = () => {
      const nuevasSelecciones = selecciones.filter(item => item.id!== seleccion.id);
      setSelecciones(nuevasSelecciones);
    }

  return (
    <>
        <div key={seleccion.id} className='mb-2 flex justify-between'>
                  <div>
                  <h3>{seleccion.name}</h3>
                  <p className='text-xl'><span className='text-[#B74125]  font-semibold'>{seleccion.quantity}x</span> <span className='text-gray-400'>@ {seleccion.price}</span> <span className='font-medium'>{total}</span></p>
                  </div>
                  <div className='justify-items-center  content-center flex justify-between px-5 w-20'>
                    <button className='mr-2' onClick={quitarUnElemento}>➖</button>
                    <button onClick={eliminarUnElemento}>❌</button>
                  </div>
                  
        </div>
        <hr/>
    
    </>
  )
}
