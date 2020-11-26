import  { useStateValue } from '../DataLayer/StateProvider';
import React from 'react';
import styles from './Checkout.module.scss';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutItems from '../Checkout/CheckoutItems/CheckoutItems';
import uniqid from 'uniqid';





function Checkout() {

    const [{basket,user}]=useStateValue();
  

    return (
        
        <div className={styles.checkout}>

            <div className={styles.checkout__left}>


     

        <img src="https://www.sify.com/uploads/sp5_ukvnBpfhdebii.jpeg" alt="amazon_add" className={styles.checkout__add}/>

         <h3> {user?"Hello , " +user.email:null}</h3>
         <h2>Your shopping Basket</h2>

     
              
  


       {
        
        basket.map(el=>{

        

           return <CheckoutItems id={el.id} stars={el.stars} image={el.image} 

           detail={el.detail} price={el.price} key={uniqid()} />

        })

       

       }

            </div>


            <div className={styles.checkout__right}>


                <Subtotal/>


                
            </div>


            
        </div>
    )
}


export default Checkout;
