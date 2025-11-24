import { GoogleGenAI } from "@google/genai";

export interface ImageAttachment {
  inlineData: {
    data: string;
    mimeType: string;
  };
}

export const sendMessageToGemini = async (
  message: string,
  images: ImageAttachment[],
  history: { role: string; parts: { text: string }[] }[],
  config: {
    apiKeys: string[];
    systemInstruction: string;
  }
): Promise<string> => {
  
  // Recursive function to try keys
  const tryGenerate = async (retryIdx: number): Promise<string> => {
    if (retryIdx >= config.apiKeys.length) {
      throw new Error("All API keys exhausted. Please update keys in Admin Dashboard.");
    }

    try {
      const apiKey = config.apiKeys[retryIdx];
      const ai = new GoogleGenAI({ apiKey });

      // CRITICAL FIX: Format history dengan benar
      const formattedContents = history.map(msg => ({
        role: msg.role,
        parts: msg.parts
      }));

      // Create current user message parts
      const currentParts: any[] = [];
      
      // 1. Add text if exists
      if (message) {
        currentParts.push({ text: message });
      }

      // 2. Add images if exist
      if (images && images.length > 0) {
        images.forEach(img => {
          currentParts.push(img);
        });
      }

      // If no text and no images, don't send
      if (currentParts.length === 0) {
        throw new Error("Message cannot be empty");
      }

      formattedContents.push({
        role: 'user',
        parts: currentParts
      });

      // CRITICAL FIX: Kirim systemInstruction dengan format yang benar
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp', // Gunakan model terbaru yang support system instruction
        contents: formattedContents,
        systemInstruction: config.systemInstruction, // LANGSUNG KIRIM STRING
        generationConfig: {
          temperature: 1.5, // High creativity untuk persona yang ekstrem
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
        }
      });

      if (response.text) {
        return response.text;
      }
      
      throw new Error("Empty response from AI");

    } catch (error: any) {
      console.warn(`Key at index ${retryIdx} failed:`, error.message);
      
      // If quota, permission, or safety error, try next key
      if (
        error.toString().includes("429") || 
        error.toString().includes("403") || 
        error.toString().includes("400") ||
        error.toString().includes("SAFETY") ||
        error.toString().includes("quota")
      ) {
         console.log(`Trying next API key (${retryIdx + 1}/${config.apiKeys.length})...`);
         return tryGenerate(retryIdx + 1);
      }
      
      throw error;
    }
  };

  return tryGenerate(0);
};
