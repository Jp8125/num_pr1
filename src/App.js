
import './App.css'
import React from 'react'
import { useState } from 'react';
import Button1 from './button'
function App() {
  const [total, setTotal] = useState(0);
  const [noOfClick, setNoOfClick] = useState(0);

  const incr = (no) => {
    setTotal(total + no);
    setNoOfClick(noOfClick + 1);
  };
  return (
    <div className='App'>
      <p>click 3 Button1s</p>
         <h1>{total}</h1>
         {noOfClick <= 2 && (
        <>
          <div className="button1">
            <Button1 incr={incr} count={2} />
            <Button1 incr={incr} count={5} />
            <Button1 incr={incr} count={1} />
            <Button1 incr={incr} count={3} />
            <Button1 incr={incr} count={2} />
            <Button1 incr={incr} count={4} />
            <Button1 incr={incr} count={1} />
            <Button1 incr={incr} count={3} />
            <Button1 incr={incr} count={5} />
            
          </div>
        </>
      )}

      {noOfClick> 2 ? total > 10 ? <p>you won</p> : <p>you lose</p> : <></>}
   
    </div>
  )
}

export default App

