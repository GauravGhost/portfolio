import React from 'react';
import { next } from "../assets"
import { useNavigate } from 'react-router-dom';

const ImageWithHoverArrow = ({ image, name, imageHeight, linkTo }) => {
    const navigate = useNavigate();

    return (
        <div
            className="relative w-full group transition-all duration-300"
            style={{ height: `${imageHeight}px` }}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-50 group-hover:scale-95 transition-all duration-300"
            />
            <button
                onClick={() => navigate(`/project/${linkTo}`)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Go to previous page"
            >
                <img src={next} alt="Next" className="w-9 h-9" />
            </button>
        </div>
    );
};

export default ImageWithHoverArrow;