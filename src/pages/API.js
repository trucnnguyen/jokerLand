import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'; 

const API = () => {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchJoke = () => {
    setIsLoading(true); 
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }
        return response.json();
      })
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        setJoke(data.joke || `${data.setup} ${data.delivery}`); 
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke(); 
  }, []);

  return (
    <>
      <div className="API">
        <Nav />
        <h1>Random Joke</h1>
        {isLoading ? (
          <p>Loading joke...</p>
        ) : (
          <div className="joke-container">
            <p>{joke}</p>
          </div>
        )}
        <button onClick={fetchJoke}>Get New Joke</button>
      </div>
    </>
  );
};

export default API;
