/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data.json"
import Tarjeta from "./components/Tarjeta";
import Carrito from "./components/Carrito";
function App() {
  const [count, setCount] = useState(0)
  const [selecciones,setSelecciones] = useState([])
 //console.log(selecciones)
  const datas = data
  return (
    <>
       <div className='w-full flex'>
        {/* Sección de postres */}
        <section className=' w-[70%] p-20'>
        <h1 className="text-6xl mb-2 font-bold">Desserts</h1>
        <div className="grid grid-cols-3 gap-8">
        {
            datas.map((data)=>(
              //console.log(data.image)
              <Tarjeta 
                key={data.id} 
                data={data}
                selecciones={selecciones}
                setSelecciones={setSelecciones}
              />
            ))
          }
        </div>
          
        </section>

        {/* Carrito */}
        <section className='bg-gray-300 w-[30%] py-20 px-10 border-b-black'>
          <div className="bg-white rounded-lg p-2">
          <h2 className="text-2xl font-bold mb-2 text-[#B74125]">You Cart({selecciones.length})</h2>
          <Carrito
          selecciones={selecciones}
          setSelecciones={setSelecciones}
          />    
          </div>
         </section>
      </div>
    </>
  )
}

export default App;
