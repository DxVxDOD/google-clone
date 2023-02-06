import React from 'react';
import {Route, Navigate, Routes as Switch} from 'react-router-dom';
import Results from './Results';

const Rooutes = () => {
  return (
    <Switch>
      <Route path="/" element={<Navigate replace to="/search" />} />
      <Route exact path='/search' element={<Results />} />
      <Route exact path='/images' element={<Results />} />
      <Route exact path='/news' element={<Results />} />
      <Route exact path='/videos' element={<Results />} />
    </Switch>
  );
};

export default Rooutes;
