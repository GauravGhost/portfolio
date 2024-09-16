import ImagePreviewModal from "./ImagePreviewModal";
import React, { useState } from 'react';
import Slider from 'react-slick';

const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const ImageGallery = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openPreview = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    return (
        <>
            {project.images?.length > 0 && (
                <section className="mb-6 carousel-container">
                    <h2 className="text-2xl font-semibold mb-2">Image Gallery</h2>
                    <Slider {...carouselSettings}>
                        {project.images.map((image, index) => (
                            <div key={index} onClick={() => openPreview(image)} className="cursor-pointer">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full sm:h-[400px] h-[180px] rounded-lg object-cover shadow-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </section>
            )}
            <ImagePreviewModal isOpen={isOpen} setIsOpen={setIsOpen} image={currentImage} />
        </>
    );
};

export default ImageGallery;