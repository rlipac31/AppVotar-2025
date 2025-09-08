import { GoogleGenAI } from "@google/genai";

//const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const ai = new GoogleGenAI({ apiKey: "AIzaSyA6Qz58HWPPf_cAp6UBgVEQydc0QhighPI" });

export async function infoCandidato(prompt)  {
     console.log("Consultando Candidato IA....")
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
   return response.text
}


