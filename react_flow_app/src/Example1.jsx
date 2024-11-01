import { useState } from "react";

function Example1()
{
    const originalPrice = 10000;
    const [discount,setDiscount]=useState(0)
    const [price,setPrice]=useState(0);

   

    const applyDiscount = (discountPercentage) => {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        setDiscount(discountAmount);  
        setPrice(originalPrice - discountAmount);  
    }

    const resetDiscount = () => {
        setDiscount(0); 
        setPrice(0); 
    }

    return(
        <>
        <h1>Original Price : {originalPrice}</h1>
        <h1>Discounted Amount: {price}</h1>
        <h2>Discount Price : {discount}</h2>
        <button style={{color:"blue"}} onClick={()=>applyDiscount(10)}>Apply 10%</button>
        <button style={{color:"red"}} onClick={()=>applyDiscount(20)}>Apply 20%</button>
        <button style={{color:"orange"}} onClick={()=>applyDiscount(30)}>Apply 30%</button>
        {/* <button style={{color:"green"}} onClick={()=>applyDiscount(0)}>Reset</button> */}
        <button style={{color:"green"}} onClick={resetDiscount}>Reset</button>
        </>
    )
}
export default Example1;