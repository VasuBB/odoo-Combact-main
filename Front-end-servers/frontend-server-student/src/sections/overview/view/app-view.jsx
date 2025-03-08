import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import DateTimeCard from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import DoughnutChart from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import LineChartComponent from '../app-conversion-rates';
import StudentInfoCard from '../app-website-visits';
// import QuizAttendanceChart from './app';

// ----------------------------------------------------------------------

export default function AppView() {
  const student = {
    name: "Aagam Shah",
    highscore: 100,
    rollNo: "12345",
    className: "10th Grade",
    avatarUrl: "/path/to/avatar.jpg",
    badges: ["Specialist", "Expert", "Champion"]
  };
  const quizLabels = ['Quizzes Attended', 'Quizzes Missed'];
  const quizData = [15, 5]; // Replace with actual numbers

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>


        <Grid xs={12} md={6} lg={4} style={{display:"flex",justifyContent:"center"}}>
        <StudentInfoCard student={student} />

        </Grid>

        <Grid xs={12} md={6} lg={4} >
      <DoughnutChart  />
        </Grid>
        <Grid xs={12} md={6} lg={4} >
      < DateTimeCard />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <LineChartComponent
            
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        
      </Grid>
    </Container>
  );
}
