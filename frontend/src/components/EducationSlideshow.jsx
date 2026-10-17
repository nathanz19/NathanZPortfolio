import { useState } from 'react';
import imgA from '../images/EduImages/a.JPG';
import imgB from '../images/EduImages/b.JPG';
import imgC from '../images/EduImages/c.jpg'; 
import imgD from '../images/EduImages/d.JPG';
import imgE from '../images/EduImages/e.JPG';
import imgF from '../images/EduImages/f.JPG';
import imgG from '../images/EduImages/g.JPG';

export default function Slideshow() {
    const slides = [
        {
            image: imgA,
            date: "October 9, 2024",
            caption: "First ever SBU event with Japanese Student Organization and Vietnamese Student Association"
        },
        {
            image: imgB,
            date: "April 14, 2025",
            caption: "Working at my first Admitted Students' Day"
        },
        { 
            image: imgC, 
            date: "May 2, 2025", 
            caption: "My first ever Roth Regatta (An annual SBU cardboard boat race at Roth Pond) with the tour guide team. I was pushing the boat for my team and we won our heat" 
        },
        { 
            image: imgD, 
            date: "November 3, 2025", 
            caption: "Day of the Dead event with my club, International Student Organization" 
        },
        { 
            image: imgE, 
            date: "March 28, 2026", 
            caption: "Work at my second Admitted Students' Day" 
        },
        {
            image: imgG, 
            date: "April 29, 2026", 
            caption: "Outing with my club's board members to celebrate our year of success in expanding the club."
        },
        {
            image: imgF, 
            date: "May 1, 2026", 
            caption: "My second Roth Regatta with the tour guide team. I was rowing the boat this time and I won my heat again" 
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className="education-slideshow-container">
            {/* Static Date Overlay */}
            <div className="slide-date">
                {slides[currentIndex].date}
            </div>

            <button className="slide-arrow left-arrow" onClick={prevSlide}>
                &#10094;
            </button>
            
            <div className="slide-content">
                
                {/* 1. New Sliding Image Track */}
                <div className="image-slider-container">
                    <div 
                        className="image-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <img 
                                key={index}
                                src={slide.image} 
                                alt={`Slide ${index + 1}`} 
                                className="slide-image"
                            />
                        ))}
                    </div>
                </div>

                {/* 2. Static Caption at the bottom */}
                <div className="slide-caption">
                    <p>{slides[currentIndex].caption}</p>
                </div>
            </div>

            <button className="slide-arrow right-arrow" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
}