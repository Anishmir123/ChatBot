// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const chatbotRoutes = require('./routes/chatbot.routes');
// // app.use(express.json());

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api/chatbot', chatbotRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const chatbotRoutes = require('./routes/chatbot.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









