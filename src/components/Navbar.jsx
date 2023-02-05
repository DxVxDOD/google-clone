import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Navbar = ( {darkTheme, setDarkTheme} ) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center
     items-center border-b dark:border-gray-200 border-gray-700' >
      <div className='flex justify-between items-center space-x-5 w-screen' >
        <Link to='/' >
          <p className='text-2xl bg-slate-500 font-bold text-red-50 py-1
          px-2 rounded dark:bg-gray-500 dark:text-gray-900' >
            Google
          </p>
        </Link>
        <button type='button' onClick={() => setDarkTheme(!darkTheme)}
          className='text-xl dark:bg-gray-50 dark:text-gray-900 text-gray-100
          bg-slate-600 border rounded px-2 py-1 hover:shadow-xl' >
          {darkTheme ? 'Light 🌕' : 'Dark 🌑'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
