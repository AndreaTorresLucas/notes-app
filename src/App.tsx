import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/HomeContainer';
import Login from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;