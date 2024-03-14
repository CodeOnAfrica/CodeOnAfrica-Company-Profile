import React from 'react'

const MiniBlog = () => {
  const myBlogStories = [
    {
      title: "United by Passion and Purpose: The Story of CodeOn Africa",
      description: "Welcome to the CodeOn Africa blog, where we're charting a new course for tech innovation in Africa. Today, we're excited to share the inspiring journey of how a group of colleagues, bound by their shared passion for technology, came together to create CodeOn Africa.",
      urlToImage: "https://media.licdn.com/dms/image/D4D12AQHHGWe4odAASQ/article-cover_image-shrink_720_1280/0/1710250280580?e=1715817600&v=beta&t=akqznJTK1MB0PgMhAhUF27i8Q_WWFQHImg8ops95s0U",
      url: "https://www.linkedin.com/pulse/united-passion-purpose-story-codeon-africa-codeon-africa-33y8f/"
    },
    {
      title: "Exploring the Impact of Artificial Intelligence in Africa",
      description: "Artificial Intelligence (AI) is set to transform various industries across Africa, bringing exciting possibilities for innovation and progress.",
      urlToImage: "https://media.licdn.com/dms/image/D4D12AQHa1bPPXDOKWw/article-cover_image-shrink_720_1280/0/1710244762224?e=1715817600&v=beta&t=pPxtuSJ0_Kn154lQb5AXa68Wmb3_s91wcxDvZE7QEkw",
      url: "https://www.linkedin.com/pulse/exploring-impact-artificial-intelligence-africa-codeon-africa-uv5wf/?trackingId=vWa%2BqLs0gtXrNqRDIV5odA%3D%3D"
    }
  ];
  return (
    <div className='md:px-16 px-4 py-8'>
      <h2 className='my-4 text-4xl font-bold'>Latest Blogs</h2>
  <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {myBlogStories.map((story, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={story.urlToImage} alt={story.title} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{story.description}</p>
        <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium underline hover:underline">Read more</a>
      </div>
    </div>
  ))}
  </div>
  </div>
  )
}

export default MiniBlog