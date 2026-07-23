import { useState } from 'react';
import { Webchat, Fab } from '@botpress/webchat';

const CLIENT_ID = '70f0948e-3bd3-47f2-98bc-90e15848a417'; // Replace with your copied Client ID

export default function BotpressChat() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prev) => !prev);
  };

  return (
    <>
      {/* The Chat Window */}
<Webchat
  clientId={CLIENT_ID}
  configuration={{
    botName: 'Hearthwood AI Assistant',
    botDescription: 'Ask me anything about our services!',
    
    // --- CUSTOM STYLING OVERRIDES ---
    botAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz7PlXO4RTHEaztOIqQL653R43GlbBlqQKvBUzqqkbA&s=10', // Optional custom avatar image URL
    
    // Theme options
    color: '#c5a206',
    themeMode: 'dark',
    headerVariant: 'none', // Primary brand color for headers & user bubbles
    
    // You can also pass stylesheet rules or custom classNames directly
    stylesheet: 'https://cdn.jsdelivr.net/npm/@botpress/webchat/dist/style.css', 
  }}
  style={{
    width: '400px',
    height: '600px',
    display: isWebchatOpen ? 'flex' : 'none',
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    zIndex: 99999,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  }}
/>

      {/* The Floating Action Button (FAB) */}
      <Fab
        onClick={toggleWebchat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 9999,
        }}
      />
    </>
  );
}