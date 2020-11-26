import React from 'react';
import styles from './CheckoutItems.module.scss';
import uniqid from 'uniqid';
import {useStateValue} from '../../DataLayer/StateProvider';



function CheckoutItems(props){


    const [{basket},dispatch]=useStateValue();

    const removeFromCart=()=>{

        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id
        })
    }



 


    return (

        <div>
            
               
                    
                    <div className={styles.checkoutitems}>
                    <div className={styles.checkoutitems__left}>

                    <img src={props.image} alt="dd"/>

                    </div>
                    
                    <div className={styles.checkoutitems__right}>

                    <p>{props.detail}</p>
                  

                    <div className={styles.checkoutitems__rating}>

                    
                         {

                   
                            Array(props.stars).fill().map((el,i)=>{
                                return <p key={uniqid()}>⭐</p>
                               
                            })
                        }

                    </div>

                    <p>&#x20B9; {props.price}</p>
               
                    <button onClick={removeFromCart}>Remove from cart</button>

                    </div>
                    
                    </div>
            
            
        </div>

        

      
    )
}
export default CheckoutItems;




