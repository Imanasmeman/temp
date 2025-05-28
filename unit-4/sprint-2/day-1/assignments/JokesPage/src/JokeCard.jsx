import { useEffect, useState } from 'react';
import axios from 'axios';
import './JokeCard.css';

function JokeCard() {
  const [joke, setJoke] = useState(null);
  const [reload, setReload] = useState(false); // used to trigger useEffect again

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        console.log('Joke fetched:', response.data);
        setJoke(response.data);
      } catch (error) {
        console.error('Failed to fetch joke:', error);
      }
    };

    fetchJoke();
  }, [reload]);

  const getNewJoke = () => {
    setReload(prev => !prev); // triggers re-fetch
  };

  return (
    <div className="joke-container">
      <div className="joke-card">
        {joke ? (
          <>
            <h2 style={{color: 'red', backgroundColor: 'white'}}> Random Joke</h2>
            <p style={{color: 'Blue', backgroundColor: 'white'}}><strong>{joke.setup}</strong></p>
            <p style={{color: 'Green', backgroundColor: 'white'}}>{joke.punchline}</p>
          </>
        ) : (
          <p>Loading joke...</p>
        )}
      </div>
      <button onClick={getNewJoke}>Get Another Joke</button>
    </div>
  );
}

export default JokeCard;
