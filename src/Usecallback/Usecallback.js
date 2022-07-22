import React, { useCallback, useState } from 'react';
import ListItem from './ListItem';

function Usecallback(props) {
    const [dark , setDark]=useState(false);
    const [number ,setNumber]=useState(0);

    const them = {
        backgroundColor : dark ? '#000' : '#fff',
        color : dark ? '#fff':'#000'
    }

    const getItem =useCallback((i)=>{
        return [i+number, i+number+1,i+number+2]
    },[number]
    )
    return (
        <div style={them}>
           <button onClick={()=>{setDark(!dark)}}>Change Them</button>
           <input type='text' placeholder='Enter Your Number' onChange={(e)=>setNumber(parseInt(e.target.value))}/>


           <ListItem getItem={getItem}/> 
        </div>
    );
}

export default Usecallback;