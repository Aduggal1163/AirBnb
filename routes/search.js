// server/routes/search.js
const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing'); // Assuming you have a Listing model for destinations

// Route to handle search
router.get('/search', async (req, res) => {
  const { location } = req.query; // Get the search query from the request
  try {
    const listings = await Listing.find({ 
      location: { $regex: location, $options: 'i' } // Case-insensitive regex search
    });
    res.render('searchResults', { listings }); // Render the search results page
  } catch (error) {
    res.status(500).send('An error occurred while searching for listings');
  }
});

module.exports = router;
