import React from 'react';
import styles from './Subtotal.module.scss';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../DataLayer/StateProvider';



function Subtotal() {

    const [{basket},state]=useStateValue();

    function calTotal(arr){

    const total= arr.reduce((a,b)=>{

      
        return parseInt(b.price)+a;
            
      
    
        
            
        },0);

        return total;

    }
    return (

        <div className={styles.subtotal}>


       <CurrencyFormat


       renderText={
           (value)=>(
               <>

               <p>
              
           Subtotal  ( {basket.length} ) : <strong> {value} </strong>

               </p>
               <small className={styles.subtotal__gift}>

                   <input type="checkbox"/>

                   This order Contains a gift


               </small>
               </>

           )
       }

       decimalScale={2}
       value={calTotal(basket)}
       displayType={"text"}
       thousandSeperator={true}
       prefix={"₹"}

/>
   


    <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
