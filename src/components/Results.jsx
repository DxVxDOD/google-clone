import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {useResultContext} from '../context/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const {getResults, results, searchTerm, isLoading} = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('/search/q=JavaScript&num=10');
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56' >
          {/* {results?.results?.map(({link, title}) => (

          ))} */}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';
    default:
      return 'ERROR';
  }
};

export default Results;
