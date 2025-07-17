import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from "@google/genai";
import { promptForPdf } from './prompt/promptForPdf';

@Injectable()
export class GeminiService {

    private ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    async basicPrompt(file: Express.Multer.File) {

        const base64Data = file.buffer.toString('base64');

        const contents = [
            { text: promptForPdf },
            {
                inlineData: {
                    mimeType: 'application/pdf',
                    data: base64Data
                }
            }
        ];

        const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
            config: {
                systemInstruction: 'Responde únicamente en español en formato markdown.'
            }
        });

        return response.text;
    }
}
