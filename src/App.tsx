import { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import ProtectedRoute from "./components/custom/ProtectedRoute";

export const LoginContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | null>(null);

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("access") ? true : false);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <HomeContainer />
            </ProtectedRoute>
            } />
        </Routes>
      </div>
    </Router>
    </LoginContext.Provider>
  );
}

export default App;