import { useEffect, useRef, useState } from 'react';
import '../App.css';
import Navigation from '../Navigation';

const Home = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [role, setRole] = useState(localStorage.getItem('role'))
    
    const images = ['https://www.extensiv.com/hubfs/Skubana/Blog%20Pages/Imported_Blog_Media/what-is-a-wms-stand-alone-2-1.jpeg',
"https://www.knic.co.id/uploads/6/apa-itu-warehouse-management.jpg",
"https://6798661.fs1.hubspotusercontent-na1.net/hubfs/6798661/Warehouse%20vs.Fulfillment_ccexpress.jpeg"]
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
        }, [index]);

   return (
    <>
    <Navigation/>
           <div className="main">
               <h2>WELCOME TO WTM ONLINE {userName.toUpperCase()}</h2>
               <p>ini ceritanya gambar</p>
               <div className="slideshow">
                   <div
                       className="slideshowSlider"
                       style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                   >
                       {images.map((image, index) => (
                           <div
                               className="slide"
                               key={index}>
                            <img src={image}></img>
                           </div>
                       ))}
                   </div>

                   {/* <div className="slideshowDots">
                       {colors.map((_, idx) => (
                           <div
                               key={idx}
                               className={`slideshowDot${index === idx ? " active" : ""}`}
                               onClick={() => {
                                   setIndex(idx);
                               }}
                           ></div>
                       ))}
                   </div> */}
               </div>
           </div>
    </>
    
   )
}
export default Home;