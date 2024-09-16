import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SectionWrapper } from '../hoc';
import { personalProjects } from '../constants/personalProjects';
import { projects } from '../constants/projects';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/carousel.css';
import ImageGallery from '../components/ImageGallery';

const ProjectPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const findProject = () => {
            let projectData = personalProjects.find((p) => p.id === projectId) ||
                projects.find((p) => p.id === projectId) ||
                null;
            setProject(projectData);
        };

        findProject();
    }, [projectId]);

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };
    if (!project) {
        return <div className="text-center text-lg text-gray-600 h-screen items-center flex justify-center">Project not found</div>; // Fallback UI
    }
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-10">
            <div className="md:w-1/3 pr-4 md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                <div className='sticky top-0 bg-primary pb-4'>
                    <img src={project.image} alt={project.name} className="w-full h-[200px] object-cover sm:h-auto rounded-lg shadow-lg" />
                    <h1 className="text-2xl font-bold mt-4">{project.name}</h1>
                    {/* <p className="text-sm mt-2 text-gray-400">{project.overview}</p> */}
                    {project.features && Object.keys(project.features).length > 0 && (
                        <section className="mt-6 hidden sm:block">
                            <p className='mb-3 text-xl font-semibold'>Content</p>
                            <div className="mb-2">
                                <p className="text-sm font-semibold text-green-700 hover:text-green-500"> <button onClick={() => scrollToElement('technology-used')}>Technology Used</button></p>
                            </div>
                            <div className="mb-2">
                                <p className="text-sm font-semibold text-green-700 hover:text-green-500"><button onClick={() => scrollToElement('project-details')}>Project Details</button></p>
                            </div>
                            {Object.entries(project.features).map(([category]) => (
                                <div key={category} className="mb-2">
                                    <p className="text-sm font-semibold text-green-700 hover:text-green-500"><button onClick={() => scrollToElement(category)}>{category}</button></p>
                                </div>
                            ))}
                        </section>
                    )}
                </div>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">

                {/* Image Carousel Section */}
                <ImageGallery project={project} />

                {/* Technologies Used Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-2" id="technology-used">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, index) => (
                            <div className='bg-green-800 text-white px-2 py-1 rounded flex flex-row gap-2 items-center justify-center'>
                                <span><img className="h-7 w-7" src={tag.icon} /></span>
                                <span key={index} className="">
                                    {tag.name || tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2" id="project-details">Project Details</h2>
                    <p className="text-slate-300">{project.description}</p>
                </section>

                {/* Features Section */}
                {project.features && Object.keys(project.features).length > 0 && (
                    <section className="mt-6">
                        {Object.entries(project.features).map(([category, items]) => (
                            <div key={category} className="mb-4" id={category}>
                                <h3 className="text-xl font-semibold">{category}</h3>
                                <ul className="list-disc pl-4 mt-2">
                                    {items?.length > 0 ? (
                                        items.map((item, index) => (
                                            <li key={index} className="text-slate-400" > {item}</li>
                                        ))
                                    ) : null}
                                </ul>
                            </div>
                        ))}
                    </section>
                )}

                {/* Link Section */}
                <section className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2">Links</h2>
                    <div className="flex gap-4">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SectionWrapper(ProjectPage, "");