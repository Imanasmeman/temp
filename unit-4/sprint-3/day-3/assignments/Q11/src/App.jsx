import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { footballMatches, isLoading, isError } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong</h2>;

  return (
    <div>
      <h1>Football Matches</h1>
      <ul>
        {footballMatches.map(match => (
          <li key={`${match.match_id}-${match.team1}-${match.team2}`}>
            {match.team1} vs {match.team2} — {match.venue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
