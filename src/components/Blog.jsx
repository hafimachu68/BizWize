import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

// Sample blog posts targeting UAE intent
const blogPosts = [
  {
    title: "How to set up a business in Dubai 2026",
    excerpt: "Everything you need to know about the latest DED regulations, visa updates, and steps to successfully launch your business in Dubai this year.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4439b6?auto=format&fit=crop&w=800&q=80",
    link:  "/contact"
  },
  {
    title: "Top UAE business laws you should know",
    excerpt: "Stay compliant and avoid penalties. A deep dive into the recent Corporate Tax updates, Emiratization laws, and labor regulations.",
    img: "https://images.unsplash.com/photo-1581092795363-9d3b1f6c3b2f?auto=format&fit=crop&w=800&q=80",
    link: "/contact"
  },
  {
    title: "Tips for foreign investors in UAE",
    excerpt: "A comprehensive guide on 100% foreign ownership, choosing the right free zone, and navigating the UAE banking system as an expat.",
    img: "https://images.unsplash.com/photo-1581092027025-92d6c54c3bb5?auto=format&fit=crop&w=800&q=80",
    link: "/contact"
  },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-hero">
        <h1>BizWize Blog</h1>
        <p>Insights, guides, and tips to grow your business in the UAE.</p>
      </header>

      <section className="blog-list">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <img src={post.img} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={post.link} className="contact-btn">Contact →</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
