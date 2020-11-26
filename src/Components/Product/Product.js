import React from 'react';
import styles from './Product.module.scss';
import  { useStateValue } from '../DataLayer/StateProvider';
import uniqid from 'uniqid';


function Product (props){

    const [{basket},dispatch]=useStateValue();

   

    const addToCart =()=>{

   

        dispatch({

            type:'ADD_TO_BASKET',
            
            item:{

                id:props.id,
                detail:props.details,
                image:props.image,
                price:props.price,
                stars:props.stars


            }

        })




    }


    return(



         <div  className={styles.product} id={props.id} >

       
         <div className={styles.product__detail}>

          <p>{props.details}</p>
          <p className={styles.product__price}><small>₹</small><strong>{props.price}</strong></p>


          <div className={styles.product__rating}>

      
              {

                   
                  Array(props.stars).fill().map((el,i)=>{
                      return <p key={uniqid()}>⭐</p>
                     
                  })
              }

          </div>

          </div>

          



      

          <img src={props.image} alt="product img"/>

          <button onClick={addToCart}>Add to Cart</button>
         





         </div>






 






    )







};

export default Product;
