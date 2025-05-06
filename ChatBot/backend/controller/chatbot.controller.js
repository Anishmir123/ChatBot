


const { sendMessageToGeminiAI } = require('../middlewares/chatbot.middleware');

const handleChat = async (req, res) => {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required and must be a string.' });
    }

    try {
        const reply = await sendMessageToGeminiAI(message);
        res.json({ reply });
    } catch (error) {
        console.error('Controller Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch response from Gemini.' });
    }
};

module.exports = { handleChat };
