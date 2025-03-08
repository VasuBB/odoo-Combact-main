import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StyledChart = styled('div')(({ theme }) => ({
  height: 400,
  '& canvas': {
    height: '100% !important',
  },
}));

const teacherData = [
  { name: 'Teacher A', students: [1, 2, 3, 4, 5] },
  { name: 'Teacher B', students: [1, 2, 3] },
  { name: 'Teacher C', students: [1, 2, 3, 4] },
  { name: 'Teacher D', students: [1, 2, 3, 4, 5, 6] },
];

const AppStudentDistribution = () => {
  const labels = teacherData.map((teacher) => teacher.name);
  const data = teacherData.map((teacher) => teacher.students.length);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Number of Students',
        data,
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Students per Teacher',
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Student Distribution" subheader="Number of students per teacher" />
      <CardContent>
        <StyledChart>
          <Bar options={options} data={chartData} />
        </StyledChart>
      </CardContent>
    </Card>
  );
};

export default AppStudentDistribution;
