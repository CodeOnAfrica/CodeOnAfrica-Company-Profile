import React, { useState } from 'react';
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'; 
import contact from '../images/contact.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && comment) { 
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/');
      }, 4000);
    } else {
      alert('Please fill in all fields'); 
    }
  };

  return (
    <div className=" min-h-screen py-12  items-center w-4/5 mx-auto">

      <div className="grid md:grid-cols-2 w-full rounded-lg  items-start">
        {/* Left Section (Location and Contacts) */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-black">Contact CodeOn Africa</h1>
          <p className='text-xl font-normal w-3/4 my-4'>We appreciate your interest in Code On Africa. Whether you have a specific project in mind or would like to learn more about what we do, 
            Link with us below.</p>

          {/* Location */}
          <div className="my-8 flex gap-4 items-center">
            <h2 className="text-xl font-medium text-black">Call Us:</h2>
            <p className='text-xl font-medium underline'>+(254) 798 840 098</p>
          </div>

          {/* Contacts */}
          <div className="my-8 flex gap-4 items-center">
            <h2 className="text-xl font-medium text-black">Email Us:</h2>
            <p className='text-xl text-black underline font-medium'><a href="mailto:codeonafrica@gmail.com">codeonafrica@gmail.com</a></p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-between w-1/2  gap-4 items-center ">
            <a href="https://www.instagram.com/codeonafrica/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={32} className="text-2xl text-black hover:text-blue-500" />
            </a>
            <a href="https://twitter.com/Codeonafrica/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter  size={32} className="text-2xl text-black hover:text-blue-500"  />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61556826287759" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare  size={32} className="text-2xl text-black hover:text-blue-500"  />
            </a>
            <a href="https://github.com/CodeOnAfrica" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} className="text-2xl text-black hover:text-blue-500"  />
            </a>
            <a href="https://www.linkedin.com/company/codeon-africa/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  size={32} className="text-2xl text-black hover:text-blue-500"  />
            </a>
          </div>
          <div className='mt-12'>
            <h2 className='text-xl font-semibold'>What happens after sending a message?</h2>
            <ul className='list-disc mx-8 space-y-4 py-4 text-lg decoration-blue-400'>
              <li>We will send an introductory message</li>
              <li>A Team member will reach you within 24 hours</li>
            </ul>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className=" w-full  flex-col items-center ">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className=" p-4 rounded-md ">
              <h1 className='text-3xl font-semibold mb-4'>Shoot a Message</h1>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 ">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="4"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-blue-500 w-full text-white font-bold px-4 py-2 rounded-md">
                  Submit
                </button>
                <p className='text-start text-sm text-gray-600 mt-2 '>Do not share sensitive information (credit card numbers, National identification numbers,tax informations, passwords) through this form.</p>
              </div>
            </form>
          ) : (
            <p className="text-blue-500 text-center">Message Received!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
