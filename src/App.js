import React, {useState, useEffect} from "react";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import MainHeader from "./components/MainHeader/MainHeader.js";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

 

useEffect(() => {
  const storedUserInfo = localStorage.getItem('isLoggedAlready')

  if(storedUserInfo === '1'){
    setIsLoggedIn(true)
  }
}, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedAlready', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
        </main>
 
    </React.Fragment>
  );
}

export default App;
