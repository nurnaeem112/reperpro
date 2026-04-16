import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateRepurposedContent = async (content: string, platform: string, tone: string) => {
  const prompt = `
    You are an expert social media manager. 
    Repurpose the following content for ${platform} with a ${tone} tone.
    
    Content: ${content}
    
    Provide the output in a structured way. 
    If it's an X Thread, provide numbered tweets.
    If it's a LinkedIn post, include a hook and bullet points.
    If it's a Blog, provide a title and sections.
    
    Also provide a brief "Why this works" explanation.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Failed to generate content. Please try again.";
  }
};
