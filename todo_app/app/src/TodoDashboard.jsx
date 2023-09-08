import React, { useEffect, useState } from 'react'

export const TodoDashboard = () => {
    const [list,setList]=useState([])
    const [task,setTask] = useState("")

const addTodo=()=>{
    setList([...list,task])
    setTask("")
}

// const removeTask=(el)=>{
//     const abc=[...list]

//     if(abc.includes(el)){
//         abc.splice(abc.indexOf(el),1)
//         setList(...abc)
//     }
// }

useEffect(()=>{
console.log(list)
},[task])


  return (
    <div style={{width:"300px",margin:"auto",marginTop:"150px"}}>
        <h1>Todo app</h1>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
        <div>
            {list.map((el)=>{
             return  <div style={{display:"flex"}} key={el}>
               <h2>{el}</h2>
                {/* <button onClick={removeTask(el)}>Remove</button> */}
                <button >Remove</button>

                </div>
            })}
        </div>
    </div>
  )
}
