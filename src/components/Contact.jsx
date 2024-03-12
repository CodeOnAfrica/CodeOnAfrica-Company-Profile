import React, { useState } from 'react';
import { FaInstagramSquare, FaSquareXTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons';
import contact from '../images/contact.jpg'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState(''); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };



  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-y-auto bg-cover bg-opacity-50" style={{ backgroundImage: `url(${contact})` }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-md md:flex md:mx-auto">
        {/* Left Section (Location and Contacts) */}
        <div className="md:w-1/2 pr-4 bg-white bg-opacity-90">
          <h1 className="text-2xl font-semibold mb-4 text-black">Contact Us</h1>

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
            <h2 className="text-lg font-medium text-black">for any info</h2>
            <p>Email: codeonafrica@gmail.com</p>
            <p>Phone: +254798840098</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/codeonafrica/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-2xl text-pink-500 cursor-pointer hover:text-pink-700" />
            </a>
            <a href="https://twitter.com/Codeonafrica/" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="text-2xl text-black-400 cursor-pointer hover:text-gray-600" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61556826287759" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-800 cursor-pointer" />
            </a>
            <a href="https://github.com/CodeOnAfrica" target="_blank" rel="noopener noreferrer">
              <FaGithub  className="text-2xl text-black-400 cursor-pointer hover:text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/company/codeon-africa/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-800 cursor-pointer hover:text-blue-900" />
            </a>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="md:w-1/2 bg-white bg-opacity-90">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 text-black">
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

              <button type="submit"  className="bg-white text-blue-800 px-4 py-2 rounded-md">
                Submit
              </button>
            </form>
          ) : (
            <p className="text-green-500">Message Recieved!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;