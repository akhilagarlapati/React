import React from 'react'

// function Greet(){
//     return <h1>Hello Akhila</h1>
// }


// const Greet =()=><h1>Hello Akhila</h1>
const Greet=props=>{
    console.log(props)
    return <div><h1>Hello {props.name}</h1>
     {props.children} 
    </div>  
}


export default Greet
