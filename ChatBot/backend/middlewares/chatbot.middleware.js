

/*-----------------------------------------------------------------*/

const dotenv = require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI instance
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to send a message to the Gemini AI
const sendMessageToGeminiAI = async (message) => {
    if (!message || typeof message !== "string") {
        throw new Error("Message is required and must be a string.");
    }

    const result = await model.generateContent(message);
    return result?.response?.text() || "No response from Gemini.";
};

module.exports = { sendMessageToGeminiAI };


/*-----------------------------------------------------------------------------------------*/
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyCqKMtKIKxvKI_PLdnEyRkZjInV19H_R0A");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());