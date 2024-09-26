import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [campaignData, setCampaignData] = useState(null);
  const [error, setError] = useState(null);

  const campaignId = 'your_campaign_id'; // Replace with actual campaign ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/campaigns/${campaignId}`);
        const data = await response.json();
        setCampaignData(data);
      } catch (err) {
        setError('Failed to load campaign details');
        console.error(err);
      }
    };

    fetchData();
  }, [campaignId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Donation Details</h1>
        {campaignData ? (
          <div className="campaign-details">
            <p><strong>Patient Name:</strong> {campaignData.patientName}</p>
            <p><strong>Age:</strong> {campaignData.patientAge}</p>
            <p><strong>Disease:</strong> {campaignData.diseaseName}</p>
            <p><strong>Required Amount:</strong> {campaignData.requiredAmount}</p>
            <p><strong>Current Status:</strong> {campaignData.admitted ? 'Admitted' : campaignData.underHomeTreatment ? 'Under Home Treatment' : 'Not Admitted'}</p>
          </div>
        ) : (
          <p>Loading donation details...</p>
        )}
      </header>
    </div>
  );
}

export default App;
