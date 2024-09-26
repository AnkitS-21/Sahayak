const express = require('express');
const firebase = require('@firebase/firestore');
const app = express();
const PORT = 3000;

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBlofOfqOO5nIb9BtZu-g409HDHJ5L2NvE",
  authDomain: "sahayak-be5b3.firebaseapp.com",
  projectId: "sahayak-be5b3",
});

const db = firebase.firestore();

app.get('/api/campaigns/:id', async (req, res) => {
  try {
    const campaignId = req.params.id;
    const campaignRef = db.collection('Campaigns').doc(campaignId);
    const doc = await campaignRef.get();

    if (!doc.exists) {
      return res.status(404).send('Campaign not found');
    }

    return res.json(doc.data());
  } catch (error) {
    console.error('Error fetching campaign details:', error);
    return res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
