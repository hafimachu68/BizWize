import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin, ChevronRight, ChevronDown, CheckCircle } from 'lucide-react';
import { blogData } from '../data/blogDetails';
import './BlogDetail.css';

const relatedPosts = [
  {
    title: "Top UAE business laws you should know",
    slug: "top-uae-business-laws",
    img: "https://images.unsplash.com/photo-1581092795363-9d3b1f6c3b2f?auto=format&fit=crop&w=800&q=80",
    category: "Corporate Tax"
  },
  {
    title: "Tips for foreign investors in UAE",
    slug: "tips-for-foreign-investors",
    img: "https://images.unsplash.com/photo-1581092027025-92d6c54c3bb5?auto=format&fit=crop&w=800&q=80",
    category: "Free Zone"
  }
];

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogData[slug] || blogData["how-to-set-up-a-business-in-dubai-2026"]; // Fallback for demo
  
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="blog-detail-page">
      <Helmet>
        <title>{post.title} | BizWize Blog</title>
        <meta name="description" content={`Read about ${post.title} on the BizWize Blog.`} />
      </Helmet>

      {/* Reading Progress */}
      <motion.div className="reading-progress" style={{ scaleX }} />

      <article className="blog-article">
        {/* Hero Section */}
        <header className="blog-detail-hero">
          <div className="hero-content-wrapper">
            <div className="tags">
              <span className="category-tag">{post.category}</span>
              <span className="read-time">{post.readTime}</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {post.title}
            </motion.h1>
            <div className="author-meta">
              <div className="author-info">
                <strong>{post.author}</strong>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={post.img} alt={post.title} className="hero-img" />
          </motion.div>
        </header>

        <div className="article-body-wrapper">
          {/* Sticky Sidebar */}
          <aside className="article-sidebar">
            <div className="sticky-sidebar-content">
              <h4>Share this article</h4>
              <div className="social-share">
                <button className="share-btn"><Twitter size={20} /></button>
                <button className="share-btn"><Linkedin size={20} /></button>
                <button className="share-btn"><Facebook size={20} /></button>
                <button className="share-btn"><Share2 size={20} /></button>
              </div>

              <div className="table-of-contents">
                <h4>Table of Contents</h4>
                <ul>
                  <li><a href="#section-1">Choosing the Right Jurisdiction</a></li>
                  <li><a href="#section-2">Legal Structures</a></li>
                  <li><a href="#section-3">Banking and Tax</a></li>
                  <li><a href="#faq">FAQs</a></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Inline CTA */}
            <div className="inline-cta">
              <h3>Ready to start your business in the UAE?</h3>
              <p>Get expert advice tailored to your specific needs and ensure a smooth setup process.</p>
              <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
            </div>

            {/* FAQs */}
            <div id="faq" className="article-faqs">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-accordion">
                {post.faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <div className="faq-question">
                      <h4>{faq.question}</h4>
                      <ChevronDown className="faq-icon" size={20} />
                    </div>
                    <motion.div 
                      className="faq-answer"
                      initial={false}
                      animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="related-posts">
        <div className="related-header">
          <h2>Related Articles</h2>
          <Link to="/blog" className="view-all">View All <ChevronRight size={16} /></Link>
        </div>
        <div className="related-grid">
          {relatedPosts.map((rel, idx) => (
            <Link to={`/blog/${rel.slug}`} className="related-card" key={idx}>
              <div className="img-wrapper">
                <img src={rel.img} alt={rel.title} />
                <span className="cat-badge">{rel.category}</span>
              </div>
              <div className="rel-info">
                <h3>{rel.title}</h3>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
