"use client";
import React, { useState } from 'react';
import Groq from 'groq-sdk';
import { TextField, Button, Paper, Typography, CircularProgress, Box } from '@mui/material';
import { Send } from '@mui/icons-material';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async () => {
    const apiKey = "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"; // Use environment variable
    if (!apiKey) {
      setError('API key is missing. Please check your environment configuration.');
      console.error('API key is missing.');
      return;
    }

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

      // Personalizing the chatbot's context with structured resume data
      const systemMessage = {
        role: 'system',
        content: `
          This is a personalized chatbot for answering questions about Princedayma's resume.
          Education Details: Bachelor's degree in Computer Science from MBM University.
          Skills: React.js, Next.js, Tailwind CSS, Docker, Git, MongoDB, EC2, Jenkins.
          Professional Experience: Internship at Oasis InfoByte with experience in fullstack development using React, Next.js.
          Projects: A Next Authenticate App, News Synopsis Website, Filmmaking Club Website.
          Certifications: React.js, Cybersecurity, Next.js.
          Extracurricular: Volunteered in college fests like Encarta, Techkriti, Khalo MBM.
          Use this data to respond with personalized answers based on the user's inquiries.
        `
      };

      const response = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [systemMessage, ...messages, userMessage], // Include system context for personalized responses
      });

      const botMessage = {
        role: 'assistant',
        content: response.choices[0]?.message?.content || 'No response from the chatbot.',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with Groq API:', error);
      setError('Failed to communicate with the chatbot service. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handlePredefinedMessage = (message) => {
    setInput(message);
    sendMessage();
  };

  return (
    <Paper className="bg-white bg-opacity-70 text-black dark:bg-black dark:bg-opacity-70 dark:text-white p-4 max-w-md mx-auto mt-10">
      <Typography variant="h5" className="text-center mb-4">
      Ask About Me
      </Typography>
      <div className="messages space-y-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="flex justify-center">
            <CircularProgress size={24} />
          </div>
        )}
      </div>
      {error && (
        <Typography variant="body2" color="error" className="mb-2">
          {error}
        </Typography>
      )}

      <Box className="mb-4">
        <Typography variant="body2" className="mb-2">
          You can ask about the following topics like 
          Collage, Skills, Hobby

        </Typography>
        
      </Box>

      <div className="flex space-x-2">
  <TextField
    fullWidth
    variant="outlined"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Type your message..."
    onKeyDown={(e) => {
      if (e.key === 'Enter') sendMessage();
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        borderWidth: '2px',
        borderColor: 'linear-gradient(45deg, #ff6b6b, #6b6bff)', // Colorful border
       
      },
    }}
  />
  <Button
    variant="contained  text-white"
    sx={{
      backgroundColor: '#6b6bff',
      '&:hover': {
        backgroundColor: '#ff6b6b',
      },
      
      color: 'white',
      borderRadius: '8px',
      padding: '10px 20px',
    }}
    onClick={sendMessage}
    disabled={loading || !input.trim()}
    endIcon={<Send />}
  >
    Send
  </Button>
</div>

    </Paper>
  );
};

export default Chatbot;
