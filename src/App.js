import Data from'./Data.js';
import {useState} from 'react';
import Parlour from './Parlour'
import './App.css';

function App() {
  const [parlour,setPalour]=useState(Data);
  function removeParlour(id){
    const newParlour=parlour.filter(parlours=>parlours.id!==id);
    setPalour(newParlour);
}
if(parlour.length===0){
   return(
    <div className='refresh'>
      <h1>NO FACILITY LEFT</h1>
      <button onClick={()=>setPalour(Data)}> Refresh</button>
    </div>
   )
}
  return (
    <div>
      
      <div >
        <Parlour parlour={parlour} removeParlour={removeParlour}></Parlour>
      </div>

    </div>
  );
}

export default App;
