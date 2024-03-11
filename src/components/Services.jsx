import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
        title: "Web Development",
        image: "https://media.istockphoto.com/id/1473636293/photo/usinessman-connect-online-network-with-virtual-business-icons-to-success-goals-marketing.jpg?s=612x612&w=0&k=20&c=DU2m_9rSa39mhrwahkEnhCPiQmXovK-Ue3PfqeNoaIQ=",
        description: "We specialize in creating modern and responsive websites that drive traffic and engage users. At our core, we believe in crafting digital experiences that leave a lasting impression. Our team of expert developers harnesses the power of technologies such as React, Angular, and Vue.js to deliver cutting-edge solutions.",
        additionalDescription: [
          "Transform your online presence with sleek designs and intuitive user interfaces.",
          "Optimize your website for performance, ensuring fast loading times and smooth interactions.",
          "Integrate powerful features such as e-commerce functionality, user authentication, and content management systems.",
          "Implement responsive designs that look great and work flawlessly across all devices and screen sizes.",
          "Leverage the latest trends in web development to stay ahead of the competition and captivate your audience."
        ],
        technologies: ["React", "Angular", "Vue.js", "Node.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      
      {
        title: "Mobile App Development",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9iaWxlJTIwQXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
        description: "From iOS to Android, we build custom mobile apps that elevate user experiences. Our team specializes in React Native, Flutter, Swift, and Kotlin to develop feature-rich applications. Whether it's a social networking app or a business utility, we ensure seamless performance and user satisfaction.",
        additionalDescription: [
          "Create engaging mobile experiences that resonate with your users and enhance brand loyalty.",
          "Leverage native app capabilities to provide intuitive functionality and a seamless user journey.",
          "Integrate with third-party services and APIs to extend the functionality of your app.",
          "Ensure cross-platform compatibility to reach a wider audience and maximize your app's potential.",
          "Stay updated with the latest mobile trends and design principles to deliver apps that stand out in the app stores."
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Java", "Firebase"],
      },
      {
        title: "E-commerce Solutions",
        image: "https://images.unsplash.com/photo-1441123285228-1448e608f3d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Boost your online sales with our custom e-commerce platforms tailored to your business. We offer solutions using Shopify, Magento, WooCommerce, and other leading platforms. From payment gateways to product management, we create seamless shopping experiences for your customers.",
        additionalDescription: [
          "Create a powerful online storefront that showcases your products and drives conversions.",
          "Integrate secure payment gateways to provide a smooth and secure checkout process for your customers.",
          "Optimize your e-commerce platform for search engines to attract organic traffic and boost sales.",
          "Implement advanced analytics to track customer behavior and make data-driven decisions.",
          "Provide ongoing support and maintenance to ensure your e-commerce platform runs smoothly and efficiently."
        ],
        technologies: ["Shopify", "Magento", "WooCommerce", "Stripe", "PayPal"],
      },
      {
        title: "Custom Software Development",
        image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "We design and develop bespoke software solutions that solve your unique challenges. Our team of skilled developers uses Python, Java, C#, .NET, SQL, and MongoDB to create efficient and scalable applications. Whether you need a CRM system or a workflow automation tool, we deliver tailored solutions.",
        additionalDescription: [
          "Tailor-made software solutions designed to address your specific business needs and objectives.",
          "Leverage cutting-edge technologies to build scalable and future-proof applications.",
          "Integrate seamlessly with your existing systems and processes for a streamlined workflow.",
          "Provide comprehensive training and support to ensure a smooth transition and adoption of the new software.",
          "Continuous updates and enhancements to keep your software up-to-date and aligned with your evolving business requirements."
        ],
        technologies: ["Python", "Java", "C#", ".NET", "SQL", "MongoDB"],
      },
    {
        title: "Cloud Computing Services",
        image: "https://cdn.techjockey.com/blog/wp-content/uploads/2022/09/08130541/What-is-Cloud-Computing-with-Examples-_feature.jpg",
        description: "Move your business to the cloud with our scalable and secure cloud computing solutions. We specialize in AWS, Azure, Google Cloud, Docker, and Kubernetes to help you harness the power of the cloud. Whether it's data storage, application hosting, or serverless computing, we've got the expertise.",
        additionalDescription: [
          "Unlock the potential of the cloud with flexible and scalable solutions tailored to your business needs.",
          "Leverage the reliability and security of leading cloud platforms such as AWS, Azure, and Google Cloud.",
          "Optimize your cloud infrastructure for cost-efficiency and performance to maximize ROI.",
          "Implement automated processes and DevOps practices for seamless deployment and management.",
          "Ensure data security and compliance with industry standards to protect your sensitive information."
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      }
      ,
      {
        title: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1658204212985-e0126040f88f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFVJJTJGVVglMjBEZXNpZ24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        description: "Create intuitive and visually appealing user interfaces for your digital products. Our design team uses tools like Figma, Sketch, and Adobe XD to craft stunning UI/UX designs. From wireframes to prototypes, we ensure a user-centric approach to elevate your brand.",
        additionalDescription: [
          "Collaborate closely with your team to understand your brand identity, target audience, and project goals.",
          "Design user interfaces that are not only visually stunning but also intuitive and easy to navigate.",
          "Create wireframes and prototypes to visualize the user flow and interaction of your digital product.",
          "Utilize industry best practices and design principles to ensure a consistent and cohesive user experience.",
          "Conduct user research and usability testing to gather valuable feedback and make data-driven design decisions."
        ],
        technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "User Testing"],
      },
      {
        title: "Cybersecurity Solutions",
        image: "https://images.unsplash.com/photo-1668854195257-61edeb3d50ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEN5YmVyc2VjdXJpdHklMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
        description: "Protect your data and infrastructure with our robust cybersecurity measures. Our team of security experts implements a multi-layered approach to safeguard your business from cyber threats. From firewalls to encryption, we ensure comprehensive protection for your sensitive information.",
        additionalDescription: [
          "Assess your current security posture and identify vulnerabilities and risks within your systems.",
          "Implement advanced firewall solutions to monitor and control incoming and outgoing network traffic.",
          "Deploy intrusion detection and prevention systems to detect and mitigate potential threats in real-time.",
          "Encrypt sensitive data both at rest and in transit to prevent unauthorized access and data breaches.",
          "Conduct regular penetration testing and security audits to proactively identify and address security weaknesses."
        ],
        technologies: ["Firewalls", "Intrusion Detection Systems", "Encryption", "Penetration Testing"],
      },
      {
        title: "AI Integration",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Leverage the power of artificial intelligence to automate tasks and gain valuable insights from your data. Our AI integration services empower your business with cutting-edge technologies such as Machine Learning and Natural Language Processing. From predictive analytics to intelligent automation, we transform your operations and drive innovation.",
        additionalDescription: [
          "Implement machine learning algorithms to analyze large datasets and uncover hidden patterns and trends.",
          "Develop natural language processing solutions to automate customer support, sentiment analysis, and language translation.",
          "Integrate AI-powered chatbots to enhance customer engagement, provide instant responses, and streamline interactions.",
          "Create personalized recommendations and content based on user behavior and preferences, improving user satisfaction and retention.",
          "Utilize AI-driven predictive analytics to forecast trends, optimize operations, and make data-driven decisions."
        ],
        technologies: ["Machine Learning", "Natural Language Processing", "TensorFlow", "PyTorch"],
      },
      {
        title: "Data Analytics Services",
        image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Unlock the potential of your data with our advanced analytics and visualization tools. Our data analytics services provide actionable insights to drive business growth and decision-making. Whether it's predictive modeling, trend analysis, or performance optimization, we help you leverage data-driven strategies for success.",
        additionalDescription: [
          "Utilize Python and R programming languages to analyze and manipulate data for meaningful insights and trends.",
          "Create interactive dashboards and visualizations using tools like Tableau, Power BI, and Google Data Studio.",
          "Implement advanced statistical techniques such as regression analysis and clustering to identify patterns and correlations.",
          "Develop custom data pipelines and ETL processes to streamline data collection, transformation, and loading.",
          "Provide comprehensive data mining and exploratory data analysis to uncover valuable insights and opportunities."
        ],
        technologies: ["Python", "R", "Tableau", "Power BI", "BigQuery"],
      },
      {
        title: "IoT Solutions",
        image: "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fElvVCUyMFNvbHV0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Connect and control devices with our Internet of Things (IoT) solutions. We offer end-to-end IoT services, from device integration to data analysis, to help you unlock new possibilities. Whether it's smart home applications, industrial automation, or remote monitoring, we bring efficiency and intelligence to your operations.",
        additionalDescription: [
          "Integrate IoT sensors and devices to collect real-time data from physical environments and assets.",
          "Develop custom IoT applications and platforms tailored to your specific needs and use cases.",
          "Implement edge computing solutions to process data locally and reduce latency for critical applications.",
          "Enable remote monitoring and control of devices, allowing for proactive maintenance and troubleshooting.",
          "Leverage IoT analytics to gain insights into performance, efficiency, and predictive maintenance."
        ],
        technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT", "Bluetooth Low Energy"],
      }
      ,
   
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          image={service.image}
          description={service.description}
          additionalDescription={service.additionalDescription}
          technologies={service.technologies}
        />
      ))}
    </div>
  );
};

export default Services;
