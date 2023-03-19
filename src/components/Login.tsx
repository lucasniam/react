import './/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


const Login = () => {

 type Login = {
    username: string
    password: string
 }


  const goTo = useNavigate()
  const goToFeedPage = () => {
      goTo('/Feed')
  }
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

  return (
   <body>
   <div className='login'>
    
        <label>
        <h1>Sign in</h1>
        username:
        <input type='text' id='username' name='username' value={username}
        onChange={handleUsernameChange}/>
        password:
        <input type='text' id='password' name='password' value={password}
        onChange={handlePasswordChange}/>
      <button onClick={goToFeedPage}>Enter</button>
      </label>
    
  </div>
  </body> 
  ) 
}


export default Login