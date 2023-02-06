import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({childeren}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2360fdfd74msha2947f11b7f085ap1bec68jsn9cc4e39d2275',
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
      },
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider value={{
      getResults, results, searchTerm, setSearchTerm, isLoading}} >
      {childeren}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
