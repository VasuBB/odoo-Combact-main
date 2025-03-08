import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from "@mui/material";


const data = [
  { name: 'Mathematics', value: 12 },
  { name: 'English', value: 19 },
  { name: 'Science', value: 3 },
  { name: 'History', value: 5 },
  { name: 'Geography', value: 2 },
  { name: 'Art', value: 3 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6', '#FF9900'];

const DoughnutChart = () => (
  <Card style={{display:"flex",justifyContent:"center",height:"300px",width:"400px",marginRight:"500px"}}>

  <div>

  <ResponsiveContainer width="100%" height={200}> 
    
  <h2>Quiz Attendance Statistics</h2>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        label
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
          </div>
          </Card>
);

export default DoughnutChart;
