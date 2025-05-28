import { ChProvider } from './components/ui/provider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserDetailsPage from './components/UserDetailsPage';

export default function App() {
  return (
    <ChProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </ChProvider>
  );
}
