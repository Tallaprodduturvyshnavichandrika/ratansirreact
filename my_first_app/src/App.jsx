import { Fragment } from "react";

function App(){
  const items=[
    {title:'cabbage',isVeg:true,id:1},
   {title:'chicken',isVeg:false,id:2},
    {title:'potato',isVeg:true,id:3},
    {title:'mutton',isVeg:false,id:4},
    {title:'dal',isVeg:true,id:5},
    {title:'fish',isVeg:false,id:6}
  ];
  
  const vegitems=items.filter((item)=>item.isVeg)
 const nonvegitems=items.filter((item)=>!item.isVeg)
  const listitems=vegitems.map(item=>
    (<li key={item.id} style={{color:"green"}}>{item.title}</li>))
    const list=nonvegitems.map(item=>
      (<li key={item.id} style={{color:"red"}}>{item.title}</li>))
       return(
 <>
 <h1> hello hi there this is modification</h1>
 <h2>clone </h2>

     <h1 style={{color:"blue"}}>veg items...</h1>
    <ul>{listitems}</ul>
   <h1 style={{color:"red"}}>non-veg items...</h1>
    <ul>{list}</ul>  

       <h1 style={{color:"green"}}>food type</h1>
       <p style={{color:"goldenrod"}}>status:{vegitems.length==0?"veg items are not available":"veg items are available"}</p>
       
       <p  style={{color:"orchid"}}>status:{nonvegitems.length==0?"non veg items are not available":"veg items are available"}</p>
    
    <p style={{color:"chocolate"}}>status:{items.length==0?"both items are not available":"both items are available"}</p>
    </>
   )
}
 export default App;

