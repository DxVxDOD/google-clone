import React from 'react';
import {Circles} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex justify-center items-center' >
      <Circles type='Puff' color='black' height={550} width={80} />
    </div>
  );
};

export default Loading;
