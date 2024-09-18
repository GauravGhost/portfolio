import React from 'react'

const LinkSection = ({ source }) => {
    return (
        <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Links</h2>
            <div className="flex gap-4">
                {
                    Object.entries(source).length > 0 && Object.entries(source).map(([hostname, hostDetail]) => (
                        <a
                            key={hostname}
                            href={hostDetail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-slate-300 hover:bg-blue-600 rounded-lg bg-blue-500 p-1.5 visited:bg-blue-800 visited:text-slate-300"
                        >
                            {hostDetail.name}
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default LinkSection;