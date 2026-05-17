import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Inicjalizacja z wymuszeniem wersji V1 dla stabilności
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // Pobieramy model 1.5-flash używając stabilnego endpointu v1
    // To omija błędy 404 z v1beta i limity "0" z wersji 2.0
    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash" },
      { apiVersion: 'v1' } 
    );

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
    
  } catch (error: any) {
    console.error('Błąd Gemini API:', error);
    
    // Jeśli nadal dostajemy 429, poinformujmy użytkownika grzecznie
    if (error.status === 429) {
      return NextResponse.json(
        { reply: "Przepraszam, mój procesor odpoczywa (limit zapytań). Spróbuj za chwilę!" },
        { status: 200 } // Zwracamy 200, żeby bot wyświetlił to jako wiadomość
      );
    }

    return NextResponse.json(
      { error: 'Błąd połączenia z mózgiem AI.' }, 
      { status: 500 }
    );
  }
}