import React from 'react'

const ProjectDetails = ({description}) => {
    return (
        <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-2" id="project-details">Project Details</h2>
            {description.split('\n').map((paragraph, index) => (
                <p key={index} className="text-slate-300 mb-2">
                    {paragraph}
                </p>
            ))}
        </section>
    )
}

export default ProjectDetails