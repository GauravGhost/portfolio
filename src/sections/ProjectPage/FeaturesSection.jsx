import React from 'react'

const FeaturesSection = ({features}) => {
    return (
        <>
            {features && Object.keys(features).length > 0 && (
                <section className="mt-6">
                    {Object.entries(features).map(([category, items]) => (
                        <div key={category} className="mb-4" id={category}>
                            <h3 className="text-xl text-gray-200 font-semibold">{category}</h3>
                            <ul className="list-disc pl-4 mt-2">
                                {items?.length > 0 ? (
                                    items.map((item, index) => (
                                        <li key={index} className="text-gray-300" > {item}</li>
                                    ))
                                ) : null}
                            </ul>
                        </div>
                    ))}
                </section>
            )}
        </>
    )
}

export default FeaturesSection