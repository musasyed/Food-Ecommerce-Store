import React, { useContext } from 'react';



const Contact = () => {



  return (
    <div>
        <h2 className='text-lg font-bold m-4 p-4'>Contact Us Page</h2>
        <form>
            <input  type='text' className='border border-black p-2 m-2' placeholder='name'/>
            <input  type='text' className='border border-black p-2 m-2' placeholder='message'/>
            <button className='bg-black text-white rounded-md p-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact