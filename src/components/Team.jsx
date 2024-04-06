import React, { useState } from 'react';

function Team() {
  const [activeMember, setActiveMember] = useState(null);

  const teamMembers = [
    {
      role: "FullStack Developer , Team Lead",
      name: "Markswell Ogutu",
      imagePath: "/Images/ceo.jpg",
      description: "Full-Stack Software Developer, Odoo Developer & Consultant, UI & UX Specialist, Data Analyst and TOT. Responsible for providing overall leadership, setting strategic direction, and ensuring the company's success and growth."
    },
    {
      role: "Frontend Developer, Operations Lead",
      name: "Evans Kurgat",
      imagePath: "/Images/coo.jpg",
      description: "Public Relations Communication expert, Google Certified Writer, and Software Engineer. Multifaceted Professional bridging Communication and Software Engineering, responsible for operational efficiency, process optimization, and day-to-day management to ensure smooth business operations and growth."
    },
    {
      role: "Frontend Developer, Technical Lead",
      name: "Isaac Kiplangat",
      imagePath: "/Images/cto.jpg",
      description: "Full-Stack Software Developer with expertise in technology strategy, innovation, and overseeing the technical aspects of product development."
    },
    {
      role: "Product and Project Manager",
      name: "Maryanne Wambui",
      imagePath: "/Images/cpo.jpg",
      description: "Full-Stack Software Developer specialized in service development, product strategy, and ensuring alignment with customer needs and market trends."
    },
    {
      role: "Revenue Analyst",
      name: "Naomi Inyele",
      imagePath: "/Images/cso.jpg",
      description: "Full-Stack Software Developer adept at leading sales strategies, driving revenue generation, and fostering strong client relationships to drive business growth."
    },
    {
      role: "UI/UX  & Product  Designer",
      name: "Joyce Mwangi",
      imagePath: "/Images/cmo.jpg",
      description: "Full-Stack Software Developer specializing in directing marketing efforts, brand promotion, and customer acquisition strategies to increase market visibility and drive sales."
    },
    {
      role: "Backend Developer",
      name: "Kevin Olongo",
      imagePath: "/Images/cfo.jpg",
      description: "Full-Stack Software Developer proficient in overseeing financial planning, reporting, risk management, and ensuring the financial health and stability of the company."
    },
    {
      role: "Quality Assuarance Developer",
      name: "Brian Ochieng",
      imagePath: "/Images/chro.jpg",
      description: "Biotechnologist and Full-Stack Software Engineer. Expert in managing HR functions including recruitment, employee relations, training, and ensuring a positive work environment for all team members."
    },
    {
      role: "Business Analyst and Customer Support, Developer",
      name: "Joy Chepngetich",
      imagePath: "/Images/cdo.jpg",
      description: "Full-Stack Software Developer  responsible for overseeing the company's data strategy and analytics initiatives. Ensuring that the company collects, manages, and analyzes data effectively to drive informed decision-making and business outcomes."
    }
  ];

  const handleMemberClick = (index) => {
    setActiveMember(index === activeMember ? null : !index);
  };

  return (
    <div className="bg-gray-100 py-16 md:px-16">
      <div className="">
        <h2 className="text-5xl font-semibold text-start mb-8">Meet Our Leadership Team</h2>
        {/* <div className="flex justify-center mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
          <div className={`bg-white rounded-lg shadow-md ${activeMember === 0 ? 'border-2 border-blue-500' : ''} hover:bg-gray-200 transition duration-300`}>
              <div className="p-4">
                <div className="flex justify-center h-40 w-40 overflow-hidden mx-auto rounded-full mb-4">
                  <img
                    src={teamMembers[0].imagePath}
                    alt={teamMembers[0].name}
                    className={` h-full w-full rounded-full object-cover cursor-pointer`}
                    onClick={() => handleMemberClick(0)}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{teamMembers[0].name}</h3>
                <p className="text-gray-600 text-center mb-4">{teamMembers[0].role}</p>
                {activeMember === 0 && (
                  <p className="text-gray-700 text-center">{teamMembers[0].description}</p>
                )}
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index } className="">
              <div className={`bg-white rounded-lg shadow-md ${activeMember === index  ? 'border-2 border-blue-500' : ''} hover:bg-gray-200 transition duration-300`}>
                <div className="p-4">
                <div className={`flex justify-center ${ activeMember ===index?"h-32 w-32":"h-48 w-48"} overflow-hidden mx-auto rounded-full mb-4`}>
                    <img
                      src={member.imagePath}
                      alt={member.name}
                      className={` h-full w-full rounded-full object-cover cursor-pointer`}
                      onClick={() => handleMemberClick(index)}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{member.role}</p>
                  {activeMember === index + 1 && (
                    <p className="text-gray-700 text-center">{member.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 items-start mb-4 md:gap-8 gap-4 mt-20">
          <div className="w-full flex flex-col justify-center items-center ">
            <h3 className="text-xl font-semibold text-center  mb-2">A Supportive Remote Work Culture For Everyone</h3>
            <p className="text-gray-600 text-center  mb-8">
              At CodeOn Africa, we foster a supportive remote work culture where every team member,
               regardless of their location, feels connected, valued, and empowered to thrive.
                We believe in leveraging technology to bridge distances, facilitate seamless
                 collaboration, and maintain strong communication channels. </p>
                 <br/>
                 <p className="text-gray-600 text-center mb-12">
                 Our remote work 
                 culture prioritizes flexibility, autonomy, and work-life balance, empowering 
                 individuals to manage their schedules and optimize productivity. We cultivate
                  an inclusive environment that celebrates diversity, respects individuality,
                   and fosters a sense of belonging. Through virtual meetings, collaborative tools, and transparent communication, we create an atmosphere of mutual trust, respect, and camaraderie, ensuring that every team member feels supported, engaged, and motivated to excel.
            </p>
            <div className="flex justify-right md:justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">Join Our Team</button>
            </div>
          </div>
          
          <div className='flex justify-center w-full'>
            <div className="grid md:grid-cols-3  ">
            <div className='md:col-span-3 flex justify-center'>
              <img src="/Images/culture1.jpg" alt="Remote Work Culture" className="w-48 object-cover  h-36 rounded-lg mb-2 transition duration-300  hover:scale-110" />
             </div>
              <img src="/Images/culture2.jpg" alt="Remote Work Culture" className="w-48 h-36 object-cover rounded-lg mb-2 transition duration-300  hover:scale-110" />
              <div></div>
              <img src="/Images/culture3.jpg" alt="Remote Work Culture" 
              className="w-48 h-36 object-cover rounded-lg mb-2 transition duration-300  hover:scale-110" />
            <div className='md:col-span-3 flex justify-center'>
              <img src="/Images/culture4.jpg" alt="Remote Work Culture" className="w-48 h-36 object-cover rounded-lg mb-2 transition duration-300  hover:scale-110" />
          </div>
          </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Team;