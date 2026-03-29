// api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
  }

  try {
    // Senin frontend'den gönderdiğim payload'ı (model, messages, temperature vs.)
    // doğrudan Groq'a iletiyoruz.
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`, // Vercel'deki gizli anahtar
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body) 
    });

    const data = await response.json();
    
    // Eğer Groq'tan hata dönerse
    if (!response.ok) {
      throw new Error(data.error?.message || "Groq API Hatası");
    }

    // Başarılı cevabı senin sitene geri gönderiyoruz
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}