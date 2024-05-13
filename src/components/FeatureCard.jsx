import React from 'react';

// Define prop types
const propsType = {
    icon: React.ReactNode,
    title: 'string',
    desc: 'string'
};

// Component definition
const FeatureCard = ({ icon, title, desc }) => {
    return (
        <div className="flex gap-4 bg-green-100 px-4 py-6">
            {icon}
            <div>
                <h2 className="font-medium text-xl">{title}</h2>
                <p className="text-green-600">{desc}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
