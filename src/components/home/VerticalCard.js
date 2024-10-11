import React from 'react';
import defaultImage from '../../assets/default.jpg';

const VerticalCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-xl text-center">
      <img src={defaultImage} alt={defaultImage} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VerticalCard;
