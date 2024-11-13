import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { viewCourse } from '../../Services/course.service';

function ViewCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    viewCourse()
      .then((res) => setCourses(res.data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);
    
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: '20px',justifyContent: 'center' }}>
      {courses.map((course) => (
        <Card key={course.id} sx={{ width: '300px' }}>
          <CardContent>
            <img src={course.course.url} width="100%" height="150px" alt="" />
            <Typography variant="h6" gutterBottom>
              {course.course.name}
            </Typography>
            <Typography>Duration: {course.course.duration} weeks</Typography>
            <Typography>Price: ${course.course.price}</Typography>
            <Typography>Start Date: {course.course.startDate}</Typography>
            <Button 
              variant="outlined" 
            //   href={course.course.url} 
            
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ marginTop: '10px' }}
            >
              Buy Course
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ViewCourse;
