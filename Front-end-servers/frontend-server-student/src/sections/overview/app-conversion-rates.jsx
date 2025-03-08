import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Typography } from '@mui/material';

const data = [
  { quizNo: 1, quizMarks: 80 },
  { quizNo: 2, quizMarks: 85 },
  { quizNo: 3, quizMarks: 75 },
  { quizNo: 4, quizMarks: 90 },
  { quizNo: 5, quizMarks: 88 },
  { quizNo: 6, quizMarks: 82 },
];

const LineChartComponent = () => (
  <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
    <Typography variant="h6" align="center" gutterBottom>
      Quiz Performance
    </Typography>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quizNo" label={{ value: 'Quiz Number', position: 'insideBottomRight', offset: -10 }} />
        <YAxis label={{ value: 'Marks', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="quizMarks" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default LineChartComponent;
