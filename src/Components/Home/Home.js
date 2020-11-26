import React, { Component } from 'react';
import styles from './Home.module.scss';
import Product from '../Product/Product';
import uniqid from 'uniqid';





function Home(){






    return(
  
         
         <div className={styles.home}>

                <div className={styles.home__container}>

             

             <img src="
             https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/family/17th-Nov/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600_2._CB415252218_.jpg
             "
              alt="" className={styles.home__bgimg}/>


             <div className={styles.home__product}>

              <div className={styles.home__row} >


                  <Product


                image="https://images-na.ssl-images-amazon.com/images/I/71y1TJbygLL._SL1500_.jpg"
                  
                 details="Juârez Acoustic Guitar, 38 Inch Cutaway, 038C with Bag, Strings, Pick and Strap, Black"

                 price="2290"

                 stars={4}

                 id={uniqid()}


                  
                  />


               
                  <Product


                image="https://images-na.ssl-images-amazon.com/images/I/71xp-yTwyGL._SX569_.jpg"
                  
                 details="Juarez JRZ38C Acoustic Guitar, 38 Inch Cutaway with Bag (TBS Transparent Blue Sunburst)"

                 price="2290"

                 stars={4}

                 id={uniqid()}


                  
                  />

                <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/81rEbqDbPUL._SL1500_.jpg"
                    details="
                    Intern INT-38C Acoustic Guitar Kit, With Bag, Strings, Pick And Strap, Black"

                    price="2290"

                    stars={5}

                    id={uniqid()}


                    
                />


          </div>

          <div className={styles.home__row}>


                <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/61AxA2YB8kL._SL1500_.jpg"
                    details="
                    boAt Bassheads 225 in Ear Wired Earphones with Mic (Black)"

                    price="599"

                    stars={5}

                    id={uniqid()}


                    
                />

                <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/61VXrg1cU%2BL._SL1500_.jpg"
                    details="
                    boAt Bassheads 225 in Ear Wired Earphones with Mic (Red)"

                    price="499"

                    stars={4}

                    id={uniqid()}


                    
                />

                  <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/81pzsRpE5GL._SL1500_.jpg"
                    details="
                    Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage)"

                    price="13999"

                    stars={4}

                    id={uniqid()}


                    
                />

                 <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg"
                    details="Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage) - 48MP Quad Camera"

                    price="11999"

                    stars={4}

                    id={uniqid()}


                    
                />

                 <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/61dYR2CEy1L._UL1000_.jpg"
                    details="JewelMaze Traditional Jhumki Earrings Combo For Women and Girls - Set of 4"

                    price="348"

                    stars={3}

                    id={uniqid()}


                    
                />


        
          </div>

          <div className={styles.home__row}>

               <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/61-B4ATQekL._SL1000_.jpg"
                    details="Filtra 4 Ply Surgical Mask with Activated Carbon (Box of 50 Masks)"

                    price="564"

                    stars={3}

                    id={uniqid()}


                    
                />

                 <Product


                   image="https://images-na.ssl-images-amazon.com/images/I/81QT577eqZL._SX569_.jpg"
                    details="Juârez GT-13 Digital LCD Guitar Bass Violin Ukulele Clip On Automatic Chromatic Tuner"

                    price="290"

                    stars={3}

                    id={uniqid()}


                    
                />


          </div>

          <div className={styles.home__row}>



            


              
                   <Product
  
  
                     image="https://images-na.ssl-images-amazon.com/images/I/5109PBmQpGL._SX327_BO1,204,203,200_.jpg"
                      details="Simply Fly : A Deccan Odyssey Hardcover – 14 January 2010
                      by Captain G R Gopinath (Author)"
  
                      price="290"
  
                      stars={3}
  
                      id={uniqid()}
  
  
                      
                
                 
                    
                />






          </div>

              </div>

              </div>

         </div>
         




    );










};

export default Home;
