import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 id='terms' className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <div className="text-lg text-gray-700 space-y-4 ">
        <p>
          <span className="font-bold">1. Introduction:</span> These Terms and Conditions govern your use of our website and services offered by CodeOn Africa, a software development company. By accessing our website and using our services, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website and services.
        </p>
        <p>
          <span className="font-bold">2. Services:</span> CodeOn Africa offers software development services including but not limited to web development, mobile app development, custom software solutions, and consultancy services. All services provided by CodeOn Africa are subject to the terms outlined in agreements between CodeOn Africa and its clients.
        </p>
        <p>
          <span className="font-bold">3. Intellectual Property:</span> All content, including software, text, graphics, logos, images, and any other materials provided by CodeOn Africa are the property of CodeOn Africa and are protected by intellectual property laws. You may not use, reproduce, modify, distribute, or display any of our intellectual property without prior written consent from CodeOn Africa.
        </p>
        <div>
        <p>
          <span className="font-bold">4. User Conduct: </span> 
          By using our website and services, you agree not to engage in any activities that may:
        </p>
        <ul className='list-disc mx-8'>
          <li>Violate any laws or regulations.</li>
          <li>Infringe upon the rights of others.</li>
          <li>Interfere with the operation of our website or services.</li>
          <li>Transmit any harmful or malicious content.</li>
          <li>Attempt to gain unauthorized access to our systems</li>
        </ul>
        </div>

        <p>
          <span className="font-bold">5. Privacy: </span> 
          Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.  
          </p>

          <p>
          <span className="font-bold">6. Disclaimer: </span> 
          CodeOn Africa makes no warranties or representations about the accuracy or completeness of the content provided on our website or through our services. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of our website or services.          
          </p>

          <p>
          <span className="font-bold">7.Modification of Terms: </span> 
          CodeOn Africa reserves the right to modify these Terms and Conditions at any time without prior notice. By continuing to use our website and services after any modifications, you agree to be bound by the updated Terms and Conditions.
          </p>

          <p>
          <span className="font-bold">7.Governing Law: </span> 
          These Terms and Conditions shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising out of or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Kenya.
          </p>
      </div>
      
      <h1 id='privacy' className="text-3xl font-bold mt-8 mb-4">Privacy Policy</h1>
      <div className="text-lg text-gray-700">
        <p>
          <span className="font-bold">1. Introduction:</span> This Privacy Policy outlines how CodeOn Africa collects, uses, and protects your personal information when you use our website and services.
        </p>

        <p>
          <span className="font-bold">2. Information We Collect:</span> 
          <ul className='list-disc mx-8'>
            <li>Personal Information: We may collect personal information such as your name, email address, phone number, and other contact details when you interact with our website or use our services.</li>
            <li>Usage Information: We may collect information about your interactions with our website, including your IP address, browser type, and pages visited.</li>
            <li>Cookies: We use cookies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</li>
          </ul>
        </p>

        <p>
          <span className="font-bold">3. How We Use Your Information:</span> 
          <ul className='list-disc mx-8'>
            <li>To provide and improve our services.</li>
            <li>To communicate with you about our services and promotions.</li>
            <li>To analyze website usage and improve our website's functionality.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>
        </p>

        <p>
          <span className="font-bold">4. Information Sharing:</span> 
          We may share your personal information with third-party service providers who assist us in delivering our services. We do not sell or rent your personal information to third parties for marketing purposes.
        </p>

        <p>
          <span className="font-bold">5. Data Security:</span> 
          We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <p>
          <span className="font-bold">6. Retention of Personal Information:</span> 
            We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>

        <p>
          <span className="font-bold">7. Your Rights:</span> 
          You have the right to access, correct, or delete your personal information held by us. You may also opt-out of receiving marketing communications from us at any time.
        </p>

        <p>
          <span className="font-bold">8. Changes to This Privacy Policy:</span> 
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised Privacy Policy will take effect immediately upon posting.
        </p>

        <p>
          <span className="font-bold">9. Contact Us:</span> 
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <span className='text-blue-500 underline'>codeonafrica254@gmail.com</span>.
        </p>

        <p className='mt-8'>
        By using our website and services, you consent to the collection and use of your personal information as described in this Privacy Policy.
        </p>

       
      </div>

      <div className="mt-8">
        <Link to="/" className="text-blue-500 font-semibold hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default TermsCondition;
