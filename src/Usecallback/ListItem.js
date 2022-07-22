import React, { useEffect } from 'react';
import { useState } from 'react';

function ListItem({getItem}) {
    const [item , setItem]=useState([])
    console.log(item);
    useEffect(()=>{
        setItem(getItem(1))
    },[getItem])
    return (
        <div>
           {
            item.map((i)=>{
                console.log(i);
                return(<p>{i}</p>)
               }) 
           }
        </div>
    );
}

export default ListItem;