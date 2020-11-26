import React, { Component } from 'react';
import  styles from './Header.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  { useStateValue } from '../DataLayer/StateProvider';
import { auth } from '../../firebase';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';


function Header() {
    const [{basket,user},action]=useStateValue();

    const signUser =()=>{

        if(user){

            auth.signOut();

            alert("SignOut Successfully");

        }

    }

    return (
        <div className={styles.Header}>

            <div className={styles.Header__logo}>

                <Link to="/">


                 <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 

                alt="amazon-Logo"/>
                
                </Link>

               
         

            </div>
            <div className={styles.Header__search}>

                <input type="text" className={styles.Header__search__box}/>
                 

                 <div className={styles.Header__search__icon}>
                   
                   <SearchIcon/>
        

                 </div>
             

            </div>
      
           <div className={styles.Header__nav}>


               <div className={styles.Header__option}>

                   <span className={styles.Header__optionOne}>


                       Hello {user?user.email.slice(0,7):'Guest'}

                     

                   </span>

                   <Link to={user?"/":"/signin"}>

                   <span className={styles.Header__optionTwo} onClick={signUser}>


                       {user?'Sign Out':'Sign In'}



                       
                    </span>

                    </Link>
     
               </div>


               <div className={styles.Header__option}>

                     <span className={styles.Header__optionOne}>

                         Return 

                   </span>

                   <span className={styles.Header__optionTwo}>

                       & Orders
                       
                    </span>
                   
               </div>


               <div className={styles.Header__option}>

                 <span className={styles.Header__optionOne}>

                     Your

                 </span>

                   <span className={styles.Header__optionTwo}>

                      Prime
                       
                </span>
                   
               </div>





           </div>

    

        <Link to="/checkout">

           <div className={styles.ShoppingBasketIcon}>

               <ShoppingBasketIcon/>

               <span className={styles.Header__optionTwo , styles.ShoppingBasketIcon__Count}> {basket.length} </span>

           </div>

        </Link>

        </div>
    )
}



export default Header;

