import './/style.css';
import { useNavigate } from 'react-router-dom';

export { BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
type Welcome = {title: string}


const Welcome = () =>{
    
    const goTo = useNavigate()
    const goToLoginPage = () => {
        goTo('/login')
    }

    return(
        <div className='center'>
            <body className='body'>
                <h1>{"SocialApp"}</h1>
                <p>Welcome</p>
                <button onClick={goToLoginPage}>Log into your account</button>
            </body>
        </div>
    )
}

export default Welcome

