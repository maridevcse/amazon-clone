import React ,{useState  } from 'react';
import styles from './SignIn.module.scss';
import {auth } from '../../firebase';
import {useHistory} from 'react-router-dom';



function SignIn() {



    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const history = useHistory();


 
     const signIn = e =>{


          e.preventDefault();

          auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{


                history.push('/')

                alert("Signed In Succesfully");
            })
            .catch(err=>alert(err.message))


     }



     const register = e =>{

         e.preventDefault();
         auth

           .createUserWithEmailAndPassword(email,password)
           .then(auth=>{
         
               history.push('/')

               alert("Registered Succesfully");
               
           })
           .catch(err=>alert(err.message))

           
     
     }


    return (
        <div className={styles.signin}>

            <img src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo.png" alt="amazon-logo"/>

            <div className={styles.signin__container}>


                <form action="" className={styles.signin__form}>

                    
                <h2>Sign-In</h2>

                    <p><strong>E-mail</strong></p>

                    <input type="text" className={styles.signin__input} value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />

                    <p> <strong>Password</strong> </p>

                    <input type="password" className={styles.signin__input} value={password}
                     onChange={e=>setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn}>Sign In</button>

                    <p className={styles.signin__terms}>By using the Amazon.in Clone website, you signify your agreement to be bound by Amazon service Condition. 
                    </p>


                    <p className={styles.signin__createaccount} onClick={register}>Create Your Amazon Account</p>




                </form>



            </div>
            
        </div>
    )
}




export default SignIn;
