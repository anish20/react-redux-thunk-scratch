import React from 'react'
import {Button,Badge} from 'react-bootstrap';
import {increment,decrement} from '../redux/action/couterAction';
import {useDispatch,useSelector} from 'react-redux';

function Counter() {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.couter);
    console.log("count:",count)
  return (
    <div style={{textAlign:'center'}}>
        <Button variant='danger' style={{margin:'10px'}} disabled={count===0 ? "disabled" : ''} onClick={()=>dispatch(decrement())}>-</Button>
        <Badge bg="secondary">{count}</Badge>
        <Button style={{margin:'10px'}}  onClick={()=>dispatch(increment())} >+</Button>
    </div>
  )
}

export default Counter