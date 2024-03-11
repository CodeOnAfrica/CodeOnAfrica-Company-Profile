import React, { useState } from 'react';

function Team() {
  const [activeMember, setActiveMember] = useState(null);

  const teamMembers = [
    {
      role: "Chief Executive Officer and Founder (CEO)",
      name: "Markswell Ogutu",
      imagePath: "/Images/ceo.jpg",
      description: "Responsible for providing overall leadership, setting strategic direction, and ensuring the company's success and growth."
    },
    {
      role: "Chief Operations Officer and Founder (COO)",
      name: "Evans Kurgat",
      imagePath: "/Images/coo.jpg",
      description: "Responsible for operational efficiency, process optimization, and day-to-day management to ensure smooth business operations and growth."
    },
    {
      role: "Chief Technology Officer and Founder (CTO)",
      name: "Isaac Kiplangat",
      imagePath: "/Images/cto.jpg",
      description: "In charge of technology strategy, innovation, and overseeing the technical aspects of product development."
    },
    {
      role: "Chief Product Officer and Founder (CPO)",
      name: "Maryanne Wambui",
      imagePath: "/Images/cpo.jpg",
      description: "Manages service development, product strategy, and ensures alignment with customer needs and market trends."
    },
    {
      role: "Chief Sales Officer and Founder (CSO)",
      name: "Naomi Inyele",
      imagePath: "/Images/cso.jpg",
      description: "Leads sales strategies, drives revenue generation, and fosters strong client relationships to drive business growth."
    },
    {
      role: "Chief Marketing Officer and Founder (CMO)",
      name: "Joyce Mwangi",
      imagePath: "/Images/cmo.jpg",
      description: "Directs marketing efforts, brand promotion, and customer acquisition strategies to increase market visibility and drive sales."
    },
    {
      role: "Chief Financial Officer and Founder (CFO)",
      name: "Kevin Olongo",
      imagePath: "/Images/cfo.jpg",
      description: "Oversees financial planning, reporting, risk management, and ensures the financial health and stability of the company."
    },
    {
      role: "Chief Human Resources Officer and Founder (CHRO)",
      name: "Brian Ochieng",
      imagePath: "/Images/chro.jpg",
      description: "Manages HR functions including recruitment, employee relations, training, and ensures a positive work environment for all team members."
    }
  ];

  const handleMemberClick = (index) => {
    setActiveMember(index === activeMember ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Creative and Smart Executive Team</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <div className={`bg-white rounded-lg shadow-md ${activeMember === index ? 'border-2 border-blue-500' : ''}`}>
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <img
                      src={member.imagePath}
                      alt={member.name}
                      className={`w-${activeMember === index ? '48' : '32'} h-${activeMember === index ? '48' : '32'} rounded-full cursor-pointer`}
                      onClick={() => handleMemberClick(index)}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{member.role}</p>
                  {activeMember === index && (
                    <p className="text-gray-700 text-center">{member.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap-reverse items-center mb-4">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-3/5">
            <h3 className="text-xl font-semibold text-center md:text-centre mb-2">A Supportive Remote Work Culture For Everyone</h3>
            <p className="text-gray-600 text-center md:text-right mb-12">
              At CodeOn Africa, we foster a supportive remote work culture where every team member, regardless of their location, feels connected, valued, and empowered to thrive. We believe in leveraging technology to bridge distances, facilitate seamless collaboration, and maintain strong communication channels. Our remote work culture prioritizes flexibility, autonomy, and work-life balance, empowering individuals to manage their schedules and optimize productivity. We cultivate an inclusive environment that celebrates diversity, respects individuality, and fosters a sense of belonging. Through virtual meetings, collaborative tools, and transparent communication, we create an atmosphere of mutual trust, respect, and camaraderie, ensuring that every team member feels supported, engaged, and motivated to excel.
            </p>
            <div className="flex justify-right md:justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">Join Our Team</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/5 flex justify-center">
            <div className="flex justify-center flex-wrap">
              <img src="/Images/culture1.jpg" alt="Remote Work Culture" className="w-40 h-32 rounded-lg mr-2 mb-2" />
              <img src="/Images/culture2.jpg" alt="Remote Work Culture" className="w-40 h-32 rounded-lg mr-2 mb-2" />
              <img src="/Images/culture3.jpg" alt="Remote Work Culture" className="w-40 h-32 rounded-lg mr-2 mb-2" />
              <img src="/Images/culture4.jpg" alt="Remote Work Culture" className="w-40 h-32 rounded-lg mb-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;