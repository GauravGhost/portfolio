import React from 'react'

const ProjectSidebar = ({name, features, image}) => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className='sticky top-0 bg-primary pb-4'>
            <img src={image} alt={name} className="w-full h-[200px] object-cover sm:h-auto rounded-lg shadow-lg" />
            <h1 className="text-2xl font-bold mt-4">{name}</h1>
            {/* <p className="text-sm mt-2 text-gray-400">{project.overview}</p> */}

            {features && Object.keys(features).length > 0 && (
                <section className="mt-6 hidden sm:block">
                    <p className='mb-3 text-xl font-semibold'>Content</p>
                    <div className="mb-2">
                        <p className="text-sm font-semibold text-green-700 hover:text-green-500"> <button onClick={() => scrollToElement('technology-used')}>Technology Used</button></p>
                    </div>
                    <div className="mb-2">
                        <p className="text-sm font-semibold text-green-700 hover:text-green-500"><button onClick={() => scrollToElement('project-details')}>Project Details</button></p>
                    </div>
                    {Object.entries(features).map(([category]) => (
                        <div key={category} className="mb-2">
                            <p className="text-sm font-semibold text-green-700 hover:text-green-500"><button onClick={() => scrollToElement(category)}>{category}</button></p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    )
}

export default ProjectSidebar