import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useEffect } from 'react';

export default function App() {
  useScrollToTop();

  useEffect(() => {
    const genAI = new GoogleGenerativeAI('AIzaSyCK-RFKP5bjmNYQmdIsj8AUb-r8WTEghzY');

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    async function run() {
      const prompt = 'Write a story about a AI and magic';

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    }

    run();
  }, []);
}
