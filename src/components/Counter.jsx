
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset ,incrementByAmount  } from '../redux/counterSlice'

const Counter = () => {
  const [amount,setAmout]= useState(0)
  const {count} =   useSelector(state=>state. counterReducer)
    const dispatch = useDispatch()
    const handleIncerementAmount = ()=>{
      if(amount){
      dispatch(incrementByAmount(+amount))
      }
      else
      {
        alert("please enter a valid amount")
      }
    }
  return (
    <div className='container text-center '>
    <div style={{width:"50%"}} className="border rounded p-5 container mt-5 ">
        <h1 style={{fontSize:'100px'}} className='text-light'>{count}</h1>
        <div  className="d-flex justify-content-around my-5 ">
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>
        </div>
        <div className="d-flex mt-5 align-items-center">
            <input onChange={e=>setAmout(e.target.value)} className='input border rounded form-control' placeholder='Enter the amount to be incremented' type="text" form-control />
            <button onClick={handleIncerementAmount} className='btn btn-primary ms-2'>INCREMENT BY AMOUNT</button>
        </div>
    </div>
    </div>
  )
}

export default Counter

 