import React from 'react'


const ProjectSidebar = ({ name, features, image }) => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };

    const ContentLink = ({ id, name }) => {
        return <div key={id} className="mb-2">
            <p className="text-sm text-left font-semibold text-green-700 hover:text-green-500"><button className='text-left' onClick={() => scrollToElement(id)}>{name}</button></p>
        </div>
    }
    return (
        <div className='sticky top-0 bg-primary pb-4'>
            <img src={image} alt={name} className="w-full h-[200px] object-cover sm:h-auto rounded-lg shadow-lg" />
            <h1 className="text-2xl font-bold mt-4">{name}</h1>
            {/* <p className="text-sm mt-2 text-gray-400">{project.overview}</p> */}

            {features && Object.keys(features).length > 0 && (
                <section className="mt-6 hidden sm:block">
                    <p className='mb-3 text-xl font-semibold'>Content</p>
                    <ContentLink id={"technology-used"} name={"Technology Used"} />
                    <ContentLink id={"project-details"} name={"Project Details"} />

                    {Object.entries(features).map(([category]) => (
                        <ContentLink id={category} name={category}/>
                    ))}
                    <ContentLink id={"link"} name={"Link"}/>
                </section>
            )}
        </div>
    )
}

export default ProjectSidebar