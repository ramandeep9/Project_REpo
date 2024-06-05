import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons';

// Mock data to represent logged-in user and chat partner
const loggedInUser = 'tourist'; // Replace with dynamic logged-in user info
const chatPartner = 'host'; // Replace with dynamic chat partner info

interface Message {
  id: number;
  sender: 'tourist' | 'host';
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: 'tourist', text: 'Hello! , I will reach by 11:00 AM', timestamp: '10:00 AM' },
  { id: 2, sender: 'host', text: 'Hi there! Ok No Issues', timestamp: '10:01 AM' },
  { id: 3, sender: 'tourist', text: 'Thank You For understanding.', timestamp: '10:02 AM' },
  { id: 4, sender: 'host', text: 'Mine Pleasure', timestamp: '10:03 AM' }
];

const OpenChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    // Scroll to the bottom of the chat when messages are updated
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg: Message = {
      id: messages.length + 1,
      sender: loggedInUser,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: ' #448f5d',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>OpenChat</span>
        </div>
        <FontAwesomeIcon icon={faCommentDots} />
      </div>
      <div id="chat-container" style={{
        flex: 1,
        overflowY: 'scroll',
        padding: '20px'
      }}>
        {messages.map((message) => (
          <div key={message.id} style={{
            display: 'flex',
            justifyContent: message.sender === loggedInUser ? 'flex-end' : 'flex-start',
            marginBottom: '10px',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <div style={{
              backgroundColor: message.sender === loggedInUser ? '#dcf8c6' : '#fff',
              padding: '10px 20px',
              borderRadius: '20px',
              maxWidth: '60%',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              position: 'relative',
              transition: 'transform 0.3s ease-in-out',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
              <span style={{ fontSize: '14px', color: '#555' }}>{message.timestamp}</span>
              <p style={{ margin: '5px 0' }}>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'
      }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '20px',
            border: '1px solid #ddd',
            marginRight: '10px',
            outline: 'none'
          }}
        />
        <button onClick={handleSendMessage} style={{
          backgroundColor: ' #448f5d',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease-in-out',
          width:'60px'
        }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#128c7e')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#075e54')}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default OpenChat;
