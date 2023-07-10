import { useEffect, useRef, useState } from 'react';
import '../App.css';
import Navigation from '../Navigation';

const Home = () => {
    const userName = localStorage.getItem('userName')
    
    const images = ['/bg4.jpg', '/bg5.jpg', '/bg6.jpg']
    // console.log("data login : ",user)
        const [index, setIndex] = useState(0);
        const timeoutRef = useRef(null);
      
        const resetTimeout = () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      
        useEffect(() => {
          resetTimeout();
          timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              ),
            3000
          );
      
          return () => {
            resetTimeout();
          };
        }, [index, images.length]);

   return (
    <>
    <Navigation/>
           <div className="main">
               <h2>Welcome To WTM Online {userName.toUpperCase()}</h2>
               <div className="slideshow">
                   <div
                       className="slideshowSlider"
                       style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                   >
                       {images.map((image, index) => (
                           <div
                               className="slide"
                               key={index}>
                            <img src={image} style={{width:"1100px", height:"620px"}} alt=''></img>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
    </>
    
   )
}
export default Home;