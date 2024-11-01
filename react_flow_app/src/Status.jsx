import { useState } from "react";

function Status()
{
    const [count,setcount]=useState(0)
    const handleclick=()=>{
   setcount(count+1);
    }
    return(
        <>
        <h1>this is counter value:{count}</h1>
        <button style={{color:'red'} }onClick={handleclick}>increament</button>
        </>
    )
}
export default Status;