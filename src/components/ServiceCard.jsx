import React, {useState} from 'react';

const ServiceCard = ({ title, image, description, additionalDescription, technologies }) => {

  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  }


  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button
        className="mt-2 bg-blue-500 text-white rounded-md px-2 py-1 text-xs"
        onClick={toggleDetails}
         >
            {showDetails ? 'View less' : 'View more'}
         </button>
         {showDetails && (<div>
         <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc pl-6 mb-4">
            {additionalDescription.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
         </div>)}
          
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
          <p className="text-gray-600">{technologies.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
