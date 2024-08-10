import React from 'react';
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div id='navbar' className='text-white flex  items-end'>
        <div>LOGO</div>
        <div className='w-15'>
          <button>TV shows</button>
          <button>Movies</button>
        </div>
        <input className='w-2/4' type="text" />
        <div className='flex'>
          <button>account</button>
          <div> my list</div>
        </div>
    </div>
    
  )
}
