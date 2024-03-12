import React, { useState, useEffect } from 'react';

function Blog() {
  const [blogNews, setBlogNews] = useState([]);

  useEffect(() => {
    const fetchBlogNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch', {
          headers: {
            'X-Api-Key': 'ec9e711cda0e4ae597ab7fd92dc9eb2f',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogNews(data.articles);
      } catch (error) {
        console.error('Error fetching blog news:', error);
      }
    };

    fetchBlogNews();
  }, []);

  // Our own blog stories
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Our Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myBlogStories.map((story, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={story.urlToImage} alt={story.title} className="w-full h-48 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-semibold mb-8 mt-12">Latest Blog News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogNews.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
