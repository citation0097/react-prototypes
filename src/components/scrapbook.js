import React from 'react';
import './scrapbook.css';
// import './images/puppy1.jpg';
import imageData from './image_data.js';
import ScrapbookImage from './scrapbook_images';

export default props =>{
    const images = imageData.map((item,index)=>{
        return <ScrapbookImage key={index} about={item}/> 
    });
    
    return (
        
        <div className="scrapbook-container">
            {images}       
        </div>
    )
    
}

