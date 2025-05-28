import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const initialState = {
  countries: [],
  loading: false,
  error: null,
  query: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, countries: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error('Invalid action type');
  }
};

function CountrySearch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mode, setMode] = useState('pagination');
  const [page, setPage] = useState(1);

  const fetchCountries = debounce(async (query) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await axios.get(`https://api.first.org/data/v1/countries`);
      const data = res.data.data;
      const filtered = Object.values(data).filter((country) =>
        country.country.toLowerCase().includes(query.toLowerCase())
      );
      dispatch({ type: 'FETCH_SUCCESS', payload: filtered });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  }, 500);

  useEffect(() => {
    if (state.query) fetchCountries(state.query);
  }, [state.query]);

  const perPage = 10;
  const paginatedData = state.countries.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h2>Country Search</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
      />
      <button onClick={() => setMode((prev) => (prev === 'pagination' ? 'infinite' : 'pagination'))}>
        Toggle to {mode === 'pagination' ? 'Infinite Scroll' : 'Pagination'}
      </button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}

      <ul>
        {(mode === 'pagination' ? paginatedData : state.countries).map((country, index) => (
          <li key={index}>{country.country}</li>
        ))}
      </ul>

      {mode === 'pagination' && (
        <div>
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
          <span> Page {page} </span>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      )}
    </div>
  );
}

export default CountrySearch;