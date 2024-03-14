import React, { useState } from 'react';
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'; 
import contact from '../images/contact.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
    <div className="md:relative min-h-screen p-4 md:px-0  flex items-center w-full justify-left overflow-y-auto bg-cover bg-opacity-50" style={{ backgroundImage: `url(${contact})` }}>

      <div className="max-w-screen-md md:flex md:mx-auto justify-left w-full bg-gray-200 bg-opacity-90  rounded-lg shadow-md md:w-4/5">
        {/* Left Section (Location and Contacts) */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left text-black">Contact Us</h1>

          {/* Location */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-black">Location</h2>
            <a
              href="https://maps.app.goo.gl/32g9GDB1keAMfDzq5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              CodeOnAfrica Nairobi
            </a>
          </div>

          {/* Contacts */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-black">For any info</h2>
            <p>Email: <a href="mailto:codeonafrica@gmail.com">codeonafrica@gmail.com</a></p>
            <p>Phone: +254798840098</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/codeonafrica/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-2xl text-pink-500 cursor-pointer hover:text-pink-700" />
            </a>
            <a href="https://twitter.com/Codeonafrica/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-2xl text-black-400 cursor-pointer hover:text-gray-600" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61556826287759" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-2xl text-blue-800 cursor-pointer" />
            </a>
            <a href="https://github.com/CodeOnAfrica" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-black-400 cursor-pointer hover:text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/company/codeon-africa/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-800 cursor-pointer hover:text-blue-900" />
            </a>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="md:w-1/2 w-full p-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-gray-200 bg-opacity-90 p-4 rounded-md">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 text-black">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 text-black">
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
                <button type="submit" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md">
                  Submit
                </button>
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
