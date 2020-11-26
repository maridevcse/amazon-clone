import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import React,{useEffect } from 'react';
import { auth } from "./firebase";
import {useStateValue } from './Components/DataLayer/StateProvider';

function App() {

  const [{basket}, dispatch]= useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser=>{

      console.log("The User is >>>>>>",authUser)

    

    if(authUser){

      // The User Logged In

      dispatch({

        type:'SET_USER',
        user:authUser

      })

    }
    else{

      dispatch({

        type:'SET_USER',
        user:null

      })
    }

  })



  

    return () => {
      
    }


  }, [])

  
  return (

    <Router>

    <div className="App">
   
 
        <Switch>
          
        <Route path="/signin">
               
               <Header/>
              <SignIn/>

         </Route>


         <Route path="/checkout">

              <Header/>

              <Checkout/>


              
            

          </Route>


          <Route path="/">

              <Header/>
              <Home/>

          </Route>

           

          

        </Switch>

    </div>

    </Router>
  );
}

export default App;
