const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for images, CSS, etc.)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Array of quotes for dynamic content
const quotes = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people. Those who know binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue."
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Route for the landing page
app.get('/', (req, res) => {
    const randomQuote = getRandomQuote();
    const repositoryUrl = 'https://github.com/cheenet-cloud/Pre-course-Containers-Deploying-and-Scaling-Apps';
    
    res.render('index', {
        title: 'Workshop01 Landing Page',
        quote: randomQuote,
        repoUrl: repositoryUrl,
        imageUrl: '/static/thumbs-up-gif-6.gif'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📝 Landing page available at http://localhost:${PORT}`);
    console.log(`🏥 Health check at http://localhost:${PORT}/health`);
});