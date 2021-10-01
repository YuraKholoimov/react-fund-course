import React, { useEffect } from "react";

import "./css/App.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";

import AppRouter from "./Components/UI/AppRouter";
import { AuthContext } from "./Components/Context";

function App() {
  const [isAuth, setIsAuth] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      setIsLoading(false)
    }
  }, [])

   return (
      <div className='App'>
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
        }}>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
  );
}

export default App;