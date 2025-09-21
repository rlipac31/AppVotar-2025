import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
//const ai = new GoogleGenAI({ apiKey: "AIzaSyA6Qz58HWPPf_cAp6UBgVEQydc0QhighPI" });

export async function infoCandidato(prompt)  {
     console.log("Consultando Candidato IA....")
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
     config: {
      
      systemInstruction: "Eres un agente político informativo ",
    },
  });
//  console.log(response.text);
   return response.text
}

export async function countTokens(prompt) {
     console.log("Contando tokens....")
   // const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const countTokensResponse = await ai.models.countTokens({
    model: "gemini-2.5-flash",
    contents: prompt,
    });
    return countTokensResponse.totalTokens
    //console.log("numero de tokens", countTokensResponse.totalTokens);
}
