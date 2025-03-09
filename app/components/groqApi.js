// groqApi.js


import Groq from 'groq-sdk';


const groq = new Groq();

export const getChatbotResponse = async (userMessage) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "system",
          "content": "Chatbot Training System Description\nObjective:\nDevelop a personalized chatbot capable of answering questions about your education, experience, skills, projects, extracurricular activities, and certifications as outlined in your resume."
        },
        {
          "role": "user",
          "content": userMessage
        }
      ],
      "model": "llama-3.1-70b-versatile",
      "temperature": 0.83,
      "max_tokens": 100,
      "top_p": 1,
      "stream": true,
      "stop": null
    });

    let response = '';
    for await (const chunk of chatCompletion) {
      response += chunk.choices[0]?.delta?.content || '';
    }
    return response;
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    return 'Sorry, I encountered an error while processing your request.';
  }
};
