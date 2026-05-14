import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Clock, User, TrendingUp } from 'lucide-react';
import { CATEGORIES, blogPosts } from '../data/blogPosts';
import './Blog.css';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find(post => post.featured);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !post.featured;
  });

  // Schema Markup for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BizWize Business Setup Blog",
    "url": "https://bizwize.ae/blog",
    "description": "Insights, guides, and tips to grow your business in the UAE.",
    "publisher": {
      "@type": "Organization",
      "name": "BizWize"
    }
  };

  return (
    <div className="blog-index-page">
      <Helmet>
        <title>BizWize Blog | UAE Business Insights & Guides</title>
        <meta name="description" content="Read the latest insights on UAE business setup, corporate tax, Golden Visa, and Free Zone company formation." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="blog-main-hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insights for the <br/><span className="text-gradient">Modern Entrepreneur</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert advice, regulatory updates, and strategic guides to launch and grow your business in the UAE.
          </motion.p>
          
          <motion.div 
            className="search-bar-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search articles, topics, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      <div className="blog-container">
        
        {/* Featured Article Banner */}
        {featuredPost && activeCategory === "All" && searchQuery === "" && (
          <motion.div 
            className="featured-article"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="featured-img-container">
              <img src={featuredPost.img} alt={featuredPost.title} />
              <div className="trending-badge"><TrendingUp size={16} /> Featured</div>
            </div>
            <div className="featured-content">
              <span className="category-tag">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              
              <div className="post-meta">
                <div className="meta-item"><User size={16} /> {featuredPost.author}</div>
                <div className="meta-item"><Clock size={16} /> {featuredPost.readTime}</div>
              </div>
              
              <Link to={`/blog/${featuredPost.slug}`} className="read-article-btn">
                Read Article <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Categories Navigation */}
        <div className="categories-wrapper">
          <div className="categories-scroll">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          <AnimatePresence>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <motion.div 
                  className="modern-blog-card"
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link to={`/blog/${post.slug}`} className="card-link-wrapper">
                    <div className="card-img-wrapper">
                      <img src={post.img} alt={post.title} loading="lazy" />
                      <div className="card-overlay"></div>
                      <span className="card-category">{post.category}</span>
                    </div>
                    <div className="card-content">
                      <div className="card-meta">
                        <span>{post.date}</span>
                        <span className="dot">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="card-footer">
                        <span className="author">{post.author}</span>
                        <span className="read-more">Read <ChevronRight size={16} /></span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>No articles found</h3>
                <p>Try adjusting your search or category filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Newsletter Subscription */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Ahead of the Curve</h2>
            <p>Get the latest UAE business insights, regulatory updates, and expert tips delivered straight to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
