import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQComponent = () => {
  
const faqdata = [
  { question: 'What sets your tech solutions apart?', answer: 'Our solutions stand out for their innovation, adaptability, and commitment to addressing unique challenges. We tailor each project to exceed expectations.' },
  { question: 'How do you ensure data security?', answer: 'Security is paramount. We implement industry-best practices, encryption, and regularly update protocols to safeguard your data, ensuring confidentiality and integrity.' },
  { question: 'Can you handle projects of various scales and industries?', answer: 'Absolutely! Our diverse team brings expertise across industries, enabling us to tackle projects of any scale. From startups to enterprises, we\'re equipped to deliver top-notch solutions.' },
];

  // State to manage the open/closed status of each FAQ item
  const [faqItems, setFaqItems] = useState(Array(faqdata.length).fill(false));

 

  // Function to toggle the open/closed status of a FAQ item
  const toggleFAQ = (index) => {
    setFaqItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = !updatedItems[index];
      return updatedItems;
    });
  };

  return (
    <div className='grid md:grid-cols-2 px-4 md:px-16 py-20 bg-blue-100 gap-8'>
      <div>
        <h1 className='text-6xl font-medium'>Our Frequently Asked Questions</h1>
        <p className='text-xl my-8 text-gray-800'>Explore our Frequently Asked Questions to gain insights into our tech solutions and processes.  
          Feel free to reach out for further clarification or details. Your understanding matters to us!</p>
        <button className='px-8 py-4 rounded-full text-lg font-medium text-white bg-blue-800 bg-opacity-85'>More FAQs</button>
      </div>
      <div>
        {faqdata.map((item, index) => (
          <div key={index}>
            <div className='flex items-center justify-between bg-white my-4 py-4 text-gray-500 px-8  rounded-2xl font-semibold text-xl' onClick={() => toggleFAQ(index)}>
              <p className={`${faqItems[index]? 'text-blue-600 text-opacity-90':'text-gray-500'}`}>{item.question}</p>
              {faqItems[index] ? <FaMinus/> : <FaPlus  />}
            </div>
            {faqItems[index] && (
              <div className='px-8 py-4 text-lg text-gray-800'>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
