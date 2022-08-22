import React from 'react'
import "./style.css"
export const Card = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div>
                       <img  className='rasm-1 n1' src="tip.jpg" alt="" />
                     </div>
                </div>
                <div className="col-3">
                <img  className='rasm-1' src="tin.jpg" alt="" />
                </div>
                <div className="col-6">
                    <div className='card-right'>
                        <div className='p-4'>
                        <p className='card-p-1'>Mett the Autor</p>
                        <p className='card-p-2'>Fiona Davis</p>
                        <p className='card-p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea odit nam dicta obcaecati rem deserunt. Dicta id veniam mollitia voluptate porro. Adipisci dolor doloribus tempore tempora quam aperiam! Rem.</p>
                        <button>Learen More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
