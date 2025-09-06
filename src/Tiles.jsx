import { useState } from 'react'
import './App.css'

function Tiles (tiles) {
    return (
      <div className='tile-container'>
        <div className='tile tile-x-1 tile-y-1'>
        </div>
        <div className='tile tile-x-2 tile-y-3'>
        </div>
        <div className='tile tile-x-1 tile-y-4'>
        </div>
        {
          tiles.map((tr,i) => tr.map((t,j) => {

            return <div className='tile tile-x-1 tile-y-4'>
                  </div>
          }))
        }
      </div>
    )
}

export default Tiles