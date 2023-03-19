
import './/style.css';
import cake from '../pictures/cake.jpg';
import stras from '../pictures/stras.jpg';
import Post from './Post';
export { BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

const Feed = () =>{   
   
    

    const postData = [{
       
        likes: 5,
        comments: 'looks amazing as always!',
        media : cake
    },
    { 
        likes: 86,
        comments: 'lucky you!',
        media : stras
      
    }]

    return(
    <>
        <div>
            <section>
                <h1>{"SocialApp"}</h1>
            </section>
        </div>
        
        <section className='center'>
        <div >
        <h2>lucasmiamiam</h2>
        <img src= {cake} alt="cake" className='picture'/>
            <Post likes={postData[0].likes} comments={postData[0].comments}/>
        </div>
        </section>
        
        <section className='center'>
        <div >
            <h2>mxnjng</h2>
            <img src={stras} alt="Cathédrale Notre Dame de Strasbourg" className='picture'/>
            <Post likes={postData[1].likes} comments={postData[1].comments}/>    
        </div>
        </section>
    </>
    )
}

export default Feed