import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            
          </Route>
          <PrivateRoute path="/checkOut/:productID">
         
         <CheckOut></CheckOut>

          </PrivateRoute>


          <PrivateRoute  path="/admin">
    
          <Admin></Admin>

          </PrivateRoute>
        
          <Route  path="/login">
           
            <Login></Login>
          </Route>


          <PrivateRoute  path="/orders">
           <Orders></Orders>
            
           </PrivateRoute>
          <Route  path="/">
           
            
           </Route>
          <Route  path="/">
           
            
           </Route>
        </Switch>
      </Router>
  
    </div>
    </UserContext.Provider>

  );
}

export default App;
