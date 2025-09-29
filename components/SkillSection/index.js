import React from 'react';

const SkillSection = ({data, name}) => {
    return (
        data && (
            <div className="flex-1 min-w-[200px]">
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <ul className="list-disc ml-5">
                    {data.map((each, index) => (
                        <li key={index} className="py-1 text-sm">
                            {each}
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};

export default SkillSection;
