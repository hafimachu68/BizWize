import React, { useState, useRef, useEffect } from 'react';
import { Search, Plus, Paperclip, Mic, Send, Bot, User, ChevronRight, CheckCircle } from 'lucide-react';
import { richRecommendations } from '../data/biziGptRichData';
import './BiziGPT.css';

const RichResponse = ({ data }) => {
  if (!data) return null;
  return (
    <div className="rich-ai-response">
      <h3>{data.q}</h3>
      
      <div className="rich-section">
        <h4>Overview</h4>
        <p>{data.overview}</p>
      </div>

      {data.benefits && data.benefits.length > 0 && (
        <div className="rich-section">
          <h4>Key Benefits</h4>
          <ul className="benefit-list">
            {data.benefits.map((ben, i) => (
              <li key={i}><CheckCircle size={16} color="#10b981"/> {ben}</li>
            ))}
          </ul>
        </div>
      )}

      {data.requirements && data.requirements.length > 0 && (
        <div className="rich-section">
          <h4>Requirements</h4>
          <table className="ai-table">
            <tbody>
              {data.requirements.map((req, i) => (
                <tr key={i}><td className="fw-bold">{req.label}</td><td>{req.desc}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.costs && data.costs.length > 0 && (
        <div className="rich-section">
          <h4>Costs</h4>
          <table className="ai-table">
            <thead>
              <tr><th>Service</th><th>Approximate Cost (AED)</th></tr>
            </thead>
            <tbody>
              {data.costs.map((cost, i) => (
                <tr key={i}><td>{cost.service}</td><td>{cost.cost}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.timeline && data.timeline.length > 0 && (
        <div className="rich-section">
          <h4>Timeline</h4>
          <table className="ai-table">
            <thead>
              <tr><th>Step</th><th>Duration</th></tr>
            </thead>
            <tbody>
              {data.timeline.map((time, i) => (
                <tr key={i}><td>{time.step}</td><td>{time.duration}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="ai-action-row">
        <a href="/contact" className="ai-book-btn">Book Free Consultation Now <ChevronRight size={14}/></a>
      </div>
    </div>
  );
};

export default function BiziGPT() {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'recommendations'
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to BiziGPT! How can I assist you with your UAE business setup today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, activeTab]);

  const handleSend = (e, customText = null) => {
    if (e) e.preventDefault();
    const userText = customText || input.trim();
    if (!userText) return;

    const userMsg = { role: 'user', content: userText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const exactMatch = richRecommendations.find(r => r.q.toLowerCase() === userText.toLowerCase());

    setTimeout(() => {
      let response = "";

      if (exactMatch) {
        response = <RichResponse data={exactMatch} />;
      } else {
        const lowerInput = userText.toLowerCase();
        
        // Conversational greetings
        if (lowerInput === 'hi' || lowerInput === 'hello' || lowerInput === 'hey' || lowerInput.includes('how are you') || lowerInput === 'good morning') {
          response = "Hello! I am BiziGPT, your dedicated UAE corporate advisor. I have access to extensive data regarding business setups, Golden Visas, corporate banking, and taxes. How can I assist you today?";
        } 
        else {
          // Smart keyword matching across the ENTIRE database
          const words = lowerInput.split(' ').filter(w => w.length > 2); // Ignore short words like "is", "how", "do"
          
          let bestMatch = null;
          let highestScore = 0;

          richRecommendations.forEach(rec => {
            let score = 0;
            const searchString = `${rec.q} ${rec.overview} ${rec.category}`.toLowerCase();
            
            words.forEach(word => {
              if (searchString.includes(word)) {
                score += 1;
              }
              // Weight specific important keywords heavily
              if ((word === 'time' || word === 'long' || word === 'days') && rec.timeline && rec.timeline.length > 0) score += 2;
              if ((word === 'cost' || word === 'price' || word === 'cheap' || word === 'fee') && rec.costs && rec.costs.length > 0) score += 2;
              if ((word === 'visa' || word === 'residency') && rec.category.toLowerCase().includes('visa')) score += 3;
              if ((word === 'bank' || word === 'account') && rec.category.toLowerCase().includes('bank')) score += 3;
              if ((word === 'freezone' || word === 'free zone') && rec.category.toLowerCase().includes('free zone')) score += 3;
              if ((word === 'mainland' || word === 'local') && rec.category.toLowerCase().includes('mainland')) score += 3;
            });

            // Extra boost if the user's input directly contains the exact question or category
            if (lowerInput.includes(rec.q.toLowerCase())) score += 5;
            if (lowerInput.includes(rec.category.toLowerCase())) score += 2;

            if (score > highestScore) {
              highestScore = score;
              bestMatch = rec;
            }
          });

          // If we found a strong match
          if (bestMatch && highestScore >= 1) {
            response = (
              <div>
                <p style={{ marginBottom: '15px', color: '#10b981', fontStyle: 'italic' }}>
                  Based on your question, here is the most relevant information I found:
                </p>
                <RichResponse data={bestMatch} />
              </div>
            );
          } else {
            // Absolute fallback for completely unrelated questions
            response = "That is an interesting question! I am specifically trained on UAE business setup, Mainland/Free Zone regulations, Visas, and Corporate Banking. Could you rephrase your question related to these topics, or would you like to speak to one of our human experts?";
          }
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const askRecommendation = (question) => {
    setActiveTab('chat');
    handleSend(null, question);
  };

  const groupedRecs = richRecommendations.reduce((acc, rec) => {
    if (!acc[rec.category]) acc[rec.category] = [];
    acc[rec.category].push(rec);
    return acc;
  }, {});

  return (
    <div className="bizi-gpt-container">
      {/* Sidebar */}
      <aside className="bizi-sidebar">
        <div className="sidebar-search">
          <Search size={18} />
          <input type="text" placeholder="Search topics..." />
        </div>

        <div className="sidebar-section">
          <div className="section-title">RELATED TOPICS</div>
          <ul className="topic-list">
            <li>Dubai Mainland Company</li>
            <li>UAE Golden Visa</li>
            <li>Corporate Bank Account</li>
            <li>Dubai Company Formation</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="section-title">SEARCH HISTORY</div>
          <ul className="topic-list">
            <li>How to Start a Business in Dubai</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="section-title">RECENT CHATS</div>
          <p className="empty-text">No recent chats.</p>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="bizi-main">
        {/* Top Navbar inside GPT */}
        <header className="bizi-header">
          <div className="header-left">
            <button 
              className={`header-tab ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              Chat
            </button>
            <button 
              className={`header-tab ${activeTab === 'recommendations' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommendations')}
            >
              Recommendations
            </button>
          </div>
          
          <div className="header-search">
            <Search size={16} />
            <input type="text" placeholder="Search for chats or topics..." />
          </div>

          <div className="header-right">
            <div className="toggle-group">
              <button className="toggle-btn active">Text</button>
              <button className="toggle-btn">Voice</button>
            </div>
            <button className="new-chat-btn" onClick={() => { setMessages([{ role: 'assistant', content: 'Welcome back! How can I help?' }]); setActiveTab('chat'); }}>
              <Plus size={16} /> New Chat
            </button>
          </div>
        </header>

        {activeTab === 'chat' ? (
          <>
            {/* Chat Messages */}
            <div className="chat-messages-area">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message-row ${msg.role}`}>
                  <div className="avatar">
                    {msg.role === 'assistant' ? <Bot size={24} /> : <User size={24} />}
                  </div>
                  <div className="message-content">
                    <div className="sender-name">{msg.role === 'assistant' ? 'BiziGPT' : 'You'}</div>
                    <div className="message-text">{msg.content}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message-row assistant">
                  <div className="avatar"><Bot size={24} /></div>
                  <div className="message-content">
                    <div className="sender-name">BiziGPT</div>
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              <form className="chat-input-wrapper" onSubmit={(e) => handleSend(e)}>
                <input 
                  type="text" 
                  placeholder="How can I help you?" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="input-actions">
                  <button type="button" className="icon-btn"><Paperclip size={20} /></button>
                  <button type="button" className="icon-btn"><Mic size={20} /></button>
                  <button type="submit" className="send-btn" disabled={!input.trim()}>
                    <Send size={18} /> Send
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="recommendations-area">
            <div className="recs-header-inline">
              <div>
                <h2>Recommended next questions</h2>
                <p>Tap any prompt to continue the conversation.</p>
              </div>
              <button className="back-to-chat-btn" onClick={() => setActiveTab('chat')}>Back to chat</button>
            </div>
            
            <div className="recs-pill-container">
              {Object.keys(groupedRecs).map((category, idx) => (
                <div key={idx} className="rec-category-block">
                  <h3 className="rec-category-title-small">{category}</h3>
                  <div className="rec-pill-list">
                    {groupedRecs[category].map((rec, rIdx) => (
                      <button 
                        key={rIdx} 
                        className="rec-pill-btn"
                        onClick={() => askRecommendation(rec.q)}
                      >
                        {rec.q}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
