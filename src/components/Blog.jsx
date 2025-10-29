import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

// Sample blog posts
const blogPosts = [
  {
    title: "How to Start a Free Zone Company in Dubai",
    excerpt: "Step-by-step guide to register your Free Zone company efficiently in 2025...",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4439b6?auto=format&fit=crop&w=800&q=80",
    link:  "/contact"
  },
  {
    title: "Mainland vs Offshore: Which is Best for You?",
    excerpt: "Compare UAE Mainland and Offshore companies to choose the right structure for your business...",
    img: "https://images.unsplash.com/photo-1581092795363-9d3b1f6c3b2f?auto=format&fit=crop&w=800&q=80",
    link: "/contact"
  },
  {
    title: "Top 5 Mistakes to Avoid in Company Formation",
    excerpt: "Avoid common pitfalls when setting up a business in the UAE...",
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
