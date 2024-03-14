import './App.css'
import  { useState } from 'react';
import MyLogin from './MyLogin';
import Jokes from './Jokes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Jokes onLogout={handleLogout} />
      ) : (
       
        <MyLogin onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
