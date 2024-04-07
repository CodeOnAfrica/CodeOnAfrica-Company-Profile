import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQComponent = () => {
  
  const faqdata = [
    { 
      question: 'What sets your tech solutions apart?', 
      answer: 'Our solutions stand out for their innovation, adaptability, and commitment to addressing unique challenges. We tailor each project to exceed expectations.' 
    },
    { 
      question: 'How do you ensure data security?', 
      answer: 'Security is paramount. We implement industry-best practices, encryption, and regularly update protocols to safeguard your data, ensuring confidentiality and integrity.' 
    },
    { 
      question: 'Can you handle projects of various scales and industries?', 
      answer: 'Absolutely! Our diverse team brings expertise across industries, enabling us to tackle projects of any scale. From startups to enterprises, we\'re equipped to deliver top-notch solutions.' 
    },
    { 
      question: 'What technologies do you specialize in?', 
      answer: 'We specialize in a wide range of technologies including but not limited to React, Angular, Vue.js, Node.js, Python, Java, Swift, and Kotlin. Our team stays updated with the latest trends to provide cutting-edge solutions.' 
    },
    { 
      question: 'How do you approach project management?', 
      answer: 'Our project management approach is agile and collaborative. We prioritize communication, transparency, and client involvement throughout the development process to ensure project success.' 
    },
    { 
      question: 'Do you provide ongoing support after project completion?', 
      answer: 'Yes, we offer comprehensive support and maintenance services post-project completion. Our team is dedicated to ensuring the long-term success and performance of your solution.' 
    },
    { 
      question: 'What is your development process like?', 
      answer: 'Our development process is iterative and client-centric. We begin with thorough requirements gathering, followed by prototyping, development, testing, and deployment. Regular feedback loops ensure alignment with client expectations.' 
    },
    { 
      question: 'Can you integrate with third-party APIs and systems?', 
      answer: 'Absolutely! We have extensive experience in integrating with various third-party APIs and systems to enhance functionality and interoperability.' 
    },
    { 
      question: 'How do you handle project timelines and deadlines?', 
      answer: 'We are committed to delivering projects on time and within budget. Our team carefully plans and schedules tasks, and we provide regular updates to ensure transparency and adherence to deadlines.' 
    },
    { 
      question: 'What are your pricing models?', 
      answer: 'Our pricing models are flexible and tailored to meet the unique needs of each project. We offer fixed-price, time and materials, and dedicated team models, among others.' 
    }
    // Add more FAQ items as needed
  ];
  

  // State to manage the open/closed status of each FAQ item
  const [faqItems, setFaqItems] = useState(Array.from({ length: faqdata.length }, () => false));

 
// Function to toggle the open/closed status of a FAQ item
const toggleFAQ = (index) => {
  setFaqItems((prevItems) => {
    // Create a new array to store the updated state
    const updatedItems = prevItems.map((item, i) => {
      // Close any previously opened item
      if (i !== index && item === true) {
        return false;
      }
      // Toggle the clicked item
      return i === index ? !item : item;
    });
    return updatedItems;
  });
};



  return (
    <div className='grid  px-4 md:px-16 py-20 bg-blue-100 gap-8'>
      <div>
        <h1 className='text-6xl font-medium'>Our Frequently Asked Questions</h1>
        <p className='text-xl my-8 text-gray-800'>Explore our Frequently Asked Questions to gain insights into our tech solutions and processes.  
          Feel free to reach out for further clarification or details. Your understanding matters to us!</p>
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
