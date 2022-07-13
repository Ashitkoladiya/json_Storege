import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DeData, IcData } from '../../redux/counter.action';

function Counter(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const handleincriment = () => {
        dispatch(IcData())
    }
    const handleDecrimemt = () => {
        dispatch(DeData())
    } 
    return (
        <div>
            <button onClick={()=>handleincriment()}>+</button>
            <p>{counter.counter}</p>
            <button onClick={()=>handleDecrimemt()}>-</button>
        </div>
    );
}

export default Counter;