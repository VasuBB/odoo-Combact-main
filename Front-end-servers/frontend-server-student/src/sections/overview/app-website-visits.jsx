import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '30vw',
  height: '40vh',
  // margin: '20px',
  padding: theme.spacing(2),
}));

const BadgeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

const badgesColors = {
  Specialist: 'primary',
  Expert: 'secondary',
  Champion: 'success',
};

// Mock data for charts (replace with your actual chart data)
const chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const barChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Student Information Card Component
export default function StudentInfoCard({ student }) {
  const { name, highscore, rollNo, className, badges } = student;

  // Generate initials for Avatar fallback
  const initials = name.split(' ').map((namePart) => namePart[0]).join('');

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar alt="Student Avatar" src={faker.image.avatar()}>
            {initials}
          </Avatar>
        }
        title={name}
        subheader={`High Score: ${highscore}`}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Roll No: {rollNo}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Class: {className}
        </Typography>
        <BadgeContainer>
          {badges.map((badge, index) => (
            <Chip
              key={index}
              label={badge}
              color={badgesColors[badge] || 'default'}
            />
          ))}
        </BadgeContainer>
      </CardContent>
    </StyledCard>
  );
}

StudentInfoCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    highscore: PropTypes.number.isRequired,
    rollNo: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
