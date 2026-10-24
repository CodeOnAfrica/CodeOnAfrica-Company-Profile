import { useState } from 'react';
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
    <section className='grid gap-10 border-t border-border px-4 py-16 md:px-16 lg:grid-cols-[1fr_1.4fr]'>
      <div>
        <p className='kicker mb-4 text-muted-foreground'>Questions</p>
        <h2 className='display text-4xl text-heading md:text-5xl'>Frequently asked questions</h2>
        <p className='mt-6 text-lg text-muted-foreground'>Insights into our tech solutions and processes.
          Reach out for anything not answered here.</p>
      </div>
      <div className='border-t border-border'>
        {faqdata.map((item, index) => (
          <div key={item.question} className='border-b border-border'>
            <button
              type='button'
              aria-expanded={faqItems[index]}
              onClick={() => toggleFAQ(index)}
              className='flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-bold text-foreground [font-stretch:106%] hover:text-heading'
            >
              <span className={faqItems[index] ? 'text-heading' : ''}>{item.question}</span>
              <span aria-hidden='true' className='shrink-0 text-action'>{faqItems[index] ? <FaMinus /> : <FaPlus />}</span>
            </button>
            {faqItems[index] && <p className='max-w-3xl pb-5 text-muted-foreground'>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;
