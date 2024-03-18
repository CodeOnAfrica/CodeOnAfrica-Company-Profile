// generateSitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Define your routes
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1 },
  { url: '/team', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.5 },
  { url: '/contact', changefreq: 'yearly', priority: 0.3 }
];

// Function to generate sitemap XML
const generateSitemapXML = async () => {
  try {
    // Create a new SitemapStream
    const stream = new SitemapStream({ hostname: 'https://localhost:5173' });

    // Write URLs to the stream
    routes.forEach(route => {
      stream.write(route);
    });

    // End the stream
    stream.end();

    // Convert stream to XML string
    const xmlString = await streamToPromise(stream).then(data => data.toString());

    // Return the XML string
    return xmlString;
  } catch (error) {
    console.error('Error generating sitemap XML:', error);
    return null;
  }
};

// Call the function to generate sitemap XML
generateSitemapXML().then(xml => {
  // Save the XML string to sitemap.xml file
  fs.writeFileSync('sitemap.xml', xml);
  console.log('Sitemap generated successfully.');
});
