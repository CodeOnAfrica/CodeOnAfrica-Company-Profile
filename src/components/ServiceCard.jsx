import React, {useState} from 'react';

const ServiceCard = ({ title, image, description, additionalDescription, technologies }) => {

  const [showDetails, setShowDetails] = useState(false)
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  }


  return (
    <div  onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} style={{backgroundImage:`url(${image})`}} className={` 
     border flex flex-col justify-between border-gray-200 ${hovered ?'bg-cover bg-opacity-50 p-4  bg-white/90 backdrop-blur-md ':''} rounded-lg overflow-hidden shadow-lg`}>
      <img src={image} alt={title} className={`w-full h-48  ${
          hovered ? 'hidden' : 'block  '
        } object-cover`} />
      <div className={`p-6 flex flex-col justify-between ${hovered ?' bg-opacity-50 bg-white/30 backdrop-blur-2xl rounded-lg':'bg-white'}`}>
        <div>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-black mb-4">{description}</p>
          {!hovered &&(
          <button className='bg-black text-white px-8 py-2 rounded-full'>Learn More </button>
          )}
        
         {showDetails && (<div>
         <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc pl-6 mb-4">
            {additionalDescription.map((item, index) => (
              <li key={index}>
                <p className="text-gray-600">{item}</p>
              <div>
          {/* <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
          <p className="text-gray-600">{technologies.join(", ")}</p> */}
        </div>
        </li>
            ))}
          </ul>
         </div>)}
          
        </div>
        
      </div>
      {hovered &&(
      <button className={`${hovered?'':'hidden'}bg-black px-8 py-2 shadow-lg shadow-white rounded-full text-white font-medium my-4 `}>Learn More</button>
      )}
      </div>
  );
};

export default ServiceCard;
