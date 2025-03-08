import React, { useState, useEffect } from 'react';
import { Card, Typography } from '@mui/material';

const DateTimeCard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <Card sx={{ maxWidth: 300,height:"300px", margin: 'auto', padding: 2,display:"flex",justifyContent:"center",alignItems:"center" }}>
      <div>

      <Typography variant="h3" align="center" gutterBottom>
        Current Date and Time
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        {formattedDate}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary">
        {formattedTime}
      </Typography>
      </div>
    </Card>
  );
};

export default DateTimeCard;
