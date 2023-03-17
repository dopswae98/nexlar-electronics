import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/Auth';
import {withRouter, Redirect} from 'react-router-dom';
//import app from './base';
import app from '../components/base';
import './designs.css'
import TheNavbar from '../components/TheNavbar';

const Designs = ({history}) => {
    
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [unValidated, setUnValidated] = useState(false);

    const validateEmail = (email) => {
        // regex for validating email address
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        return re.test(String(email).toLowerCase());
      };

      const {validated, setValidated, email, setEmail} = useContext(AuthContext)

      const handleSubmit = (e) => {
        e.preventDefault();
        //setValidated(true)
        console.log('entered');

        

        if (!validateEmail(email) || email==="") {
          setErrorMessage("Please enter a valid email address.");
         // return;
        }
    
        if (password !== "P@ssw0rd123") {
            console.log('fix your email');
          setErrorMessage("Incorrect password.");
          //return;
        }

        if (email === 'aa@gmail.com' || email=== 'spyemail@gmail.com'){
            console.log('validated');
            setValidated(true);
            setUnValidated(false)
            try {
                history.push('/Menu')
            } catch (error) {
                alert(error)
            }

        } 

        if (email !== 'aa@gmail.com' || email !== 'spyemail@gmail.com'){
            console.log('unvalidated',errorMessage);
           // setValidated(true);
            setUnValidated(true)
        }

        if(validated){
            return <Redirect to='/Menu'/>
        }
    
        // navigate to main page and display user's identity and sign out button.
    
      };
 
  return (
    <div className='bg-light vh-100 page  text-white'>
        <TheNavbar/>
        {validated ? 'validated': `not validated ${email}`}
        <div className="container py-5">
            {unValidated && <p className='text-center text-danger'>password or email error</p>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"/>
                        </div>
                        <div className="form-check my-3 d-flex">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e)=>setPassword(e.target.value)}/>
                            <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
                                Remember Me
                            </label>
                        </div>
                        <div className="mb-3">
                            <button type="submit" onClick={()=>handleSubmit} className="btn btn-outline-warning form-control" ><code className='fs-6'>SIGN IN </code> </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );  
};

export default withRouter(Designs);