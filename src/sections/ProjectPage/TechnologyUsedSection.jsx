import React from 'react'

const TechnologyUsedSection = ({tags}) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2" id="technology-used">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
                {tags?.map((tag, index) => (
                    <div key={tag.name} className='bg-green-800 text-white px-2 py-1 rounded flex flex-row gap-2 items-center justify-center'>
                        <span><img alt={tag.name} className="h-7 w-7" src={tag.icon} /></span>
                        <span className="">
                            {tag.name || tag}

                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologyUsedSection