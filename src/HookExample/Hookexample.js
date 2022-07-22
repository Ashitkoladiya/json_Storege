import React, { useMemo, useState } from 'react';

function Hookexample(props) {
    const [number , setNumber] = useState(0);
    const [count , setCount]=useState(0)

  
    const factorial= (n)=>{
        console.log("called");
        if(n > 1){
            return n*factorial(n-1);
        }else{
            return 1;
        }
    }

    //without use memo
    // const result= factorial(number)

    //with use memo

  
    const result = useMemo(() => factorial(number), [number]);   

    return (
        <div>
            <input type = "text" placeholder='enter your number' onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>count</button>

            <h1>counter value is :{count}</h1>
            <h1>factorial value is :{result}</h1>
            
        </div>
    );
}

export default Hookexample;