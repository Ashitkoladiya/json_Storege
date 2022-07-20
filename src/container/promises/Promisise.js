import React, { useEffect } from 'react';

function Promisise(props) {
  
  const one = () => {
    return "one is hear"
  }
  const two = () => {
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       
            resolve( "two is hear")
          
      },2000)
})
}
 
  

  const three = () => {
    return "three is hear"
  }
  

  const All = async() => {
    const o = one()
        console.log(o);
   

    const t = await two()
        console.log(t);
    

    const th = three()
        console.log(th);
    
  }


  const display = (z)=>{
    console.log(z);
}
    const sum =(display)=>{
        let x=10, y=5;
        let z ;
        z = x+y;
        display(z)
    
    
  }
  sum(display)


  useEffect (()=>{
    All();
  },[]
  )
  
    return (
        <div>
            
        </div>
    );
}

export default Promisise;