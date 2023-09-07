"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")

  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask,{title,desc}]);


     settitle("")
     setdesc("")
     

  };

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i, 1);
    setmainTask(copytask);


  }
  let renderTask =   <h1 className='text-pink-600 flex items-center justify-center text-3xl' >No task Available please add new task</h1>
  if(mainTask.length > 0){
    renderTask  = mainTask.map((t,i)=>{
      return (
        
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-evenly  w-2/3'>
          
              <h5 className='text-2xl font-semibold '>{t.title}</h5>

              
        
        <h6 className='text-lg font-medium'>{t.desc}</h6>
        <button onClick={()=>{
        {deleteHandler(i)}
      }} className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </div>
     
        </li>
      
      );
    });

  }

  return (
    <>
    <h1 className=' bg-black text-white p-5 items-center text-5xl font-bold text-center 
     gap-2'>Subhash Todo List</h1>
     <form className='flex items-center justify-center' onSubmit={submitHandler}>
      <input type="text" placeholder='enter task here' className='text-2xl  border-zinc-500 border-4 m-8 px-4 py-2' 
      value={title} onChange={(e)=>{
        settitle(e.target.value);

      }}/>
      <input type="text" placeholder='enter task here' className='text-2xl  border-zinc-500 border-4 m-8 px-4 py-2' 
      value={desc} onChange={(e)=>{
        setdesc(e.target.value);
      }}/>
      <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>ADD to task</button>
     </form>
     <hr />
     <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>

     </div>
     
    </>
  )
}

export default page;