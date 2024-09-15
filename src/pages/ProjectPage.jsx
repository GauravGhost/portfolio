import React from 'react'
import { useParams } from 'react-router-dom'
import { SectionWrapper } from '../hoc';
const ProjectPage = () => {
    const { projectId } = useParams();
    return (
        <>
            <div>ProjectPage</div>
            <p>ProjectId {projectId}</p>
        </>
    )
}

export default SectionWrapper(ProjectPage, "")