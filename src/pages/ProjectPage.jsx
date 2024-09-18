import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/carousel.css';

import { SectionWrapper } from '../hoc';
import { personalProjects } from '../constants/personalProjects';
import { projects } from '../constants/projects';
import ImageGallery from '../components/ImageGallery';
import {
    ProjectSidebar,
    FeaturesSection,
    LinkSection,
    ProjectDetails,
    TechnologyUsedSection
} from '../sections/ProjectPage';

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


    if (!project) {
        return <div className="text-center text-lg text-gray-600 h-screen items-center flex justify-center">Project not found</div>;
    }
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-10">
            <div className="md:w-1/3 pr-4 md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                <ProjectSidebar name={project.name} features={project.features} image={project.image} />
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
                <ImageGallery project={project} />
                <TechnologyUsedSection tags={project.tags} />
                <ProjectDetails description={project.description} />
                <FeaturesSection features={project.features} />
                <LinkSection source={project.source} />
            </div>
        </div>
    );
}

export default SectionWrapper(ProjectPage, "");