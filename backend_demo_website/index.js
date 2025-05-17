// Import required modules
const express = require('express');
const cors = require('cors');

// Import Prisma client
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()


// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to enable CORS for all origins (for frontend-backend communication)
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Define POST endpoint to receive input text and store in database
app.post('/api/save-text', async (req, res) => {
  try {
    const { text } = req.body;

    // Basic validation to ensure text is provided
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Invalid input: text is required and should be a string' });
    }

    // Use Prisma to save the text in the InputText table
    const saved = await prisma.inputText.create({
      data: {
        text,
      },
    });

    // Return success response with saved record ID
    res.json({ message: 'Text saved successfully', id: saved.id });
  } catch (error) {
    console.error('Error saving text:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server listening on port 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
