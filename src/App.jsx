import { useState, useEffect } from 'react'
import Tiles from './Tiles'
import './App.css'

function App() { 

  let initTiles = Array.apply(null, Array(4)).map(() => Array(4).fill(0))
  let a = Math.floor(4 * Math.random())
  let b = Math.floor(4 * Math.random())
  initTiles[a][b] = 2
  initTiles[(a+1) % 4][(b+1) % 4] = 2
  console.log(initTiles)
  const [tiles, setTiles] = useState(initTiles)

  

  /*const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      console.log('Up arrow pressed!');
      // Add logic for moving up
    } else if (event.key === 'ArrowDown') {
      console.log('Down arrow pressed!');
      // Add logic for moving down
    } else if (event.key === 'ArrowLeft') {
      console.log('Left arrow pressed!');
      // Add logic for moving left
    } else if (event.key === 'ArrowRight') {
      console.log('Right arrow pressed!');
      // Add logic for moving right
    }
  };*/

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
          break;
        case "ArrowDown":
          break;
        case "ArrowRight":
          break;
        case "ArrowLeft":
          break;
      }
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);




  return (
    </*div tabIndex="0" onKeyDown={handleKeyDown} className="container"*/>

      <div className='game-block' >
        
        <div className='grid-container'>
          <div className='grid-row'>
            <div className='grid-space'>
            </div>
            <div className='grid-space'>
            </div>
            <div className='grid-space'>
            </div>
            <div className='grid-space rightmost'>
            </div>
          </div>
          <div className='grid-row'>
            <div className='grid-space'>

            </div>
            <div className='grid-space'>

            </div>
            <div className='grid-space'>

            </div>
            <div className='grid-space rightmost'>

            </div>
          </div>
          <div className='grid-row'>
            <div className='grid-space'>

            </div>
            <div className='grid-space'>

            </div>
            <div className='grid-space'>

            </div>
            <div className='grid-space rightmost'>

            </div>
          </div>
          <div className='grid-row'>
            <div className='grid-space'>

            </div>
            <div className='grid-space'>

            </div>
            <div className='grid-space'>

            </div>
            <div className='grid-space rightmost'>

            </div>
          </div>
        </div>


        <div className='tile-container'>
          {
            tiles.map((tr,i) => tr.map((t,j) => {
              return <div key={[i,j]} className={`tile t${t} tile-x-${j} tile-y-${i}`}>
                    {t}
                    </div>
            }))
          }
        </div>
      </div>

    </>
  )
}

export default App
