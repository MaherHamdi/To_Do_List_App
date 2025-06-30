import React,{useState} from 'react'
import styles from './Login.module.css';
import login from '../../assets/login.png';
import {Button, Input, message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
      const [username,setUsername] = useState("");
      const [password,setPassword] = useState("");
      const [firstName,setFirstName] = useState("");
      const [lastName,setLastName] = useState("");
      const [loading,setLoading] = useState(false);
      const handleSubmit = async ()=> {
        console.log("login");

    }
    return (
       <div>
             <div className={styles.login__card}>
                 <img src={login} alt=".."/>
                 <h2>Register</h2>
                 <div className={styles.input__inline__wrapper}>
                     <Input 
                     placeholder="First Name" 
                     value={firstName} 
                     onChange={(e)=>setFirstName(e.target.value)} />
                     <Input 
                     placeholder="Last Name" 
                     style={{marginLeft:'10px'}}
                     value={lastName} 
                     onChange={(e)=>setLastName(e.target.value)} />
       
                 </div>
                 <div className={styles.input__wrapper}>
                     <Input 
                     placeholder="Username" 
                     value={username} 
                     onChange={(e)=>setUsername(e.target.value)} />
                 </div>
                 <div className={styles.input__wrapper}>
                     <Input.Password 
                     placeholder="Password" 
                     value={password} 
                     onChange={(e)=>setPassword(e.target.value)} />
                 </div>
                 <div className={styles.input__info}>
                   Existing User? <Link to="/login">Login</Link>
                  </div> 
                  <Button  type="primary" size="large" disabled={!username || !password} onClick={handleSubmit} >Register</Button>
             </div>
           </div>
    )
}

export default Register
