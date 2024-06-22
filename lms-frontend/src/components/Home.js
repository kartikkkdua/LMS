// Home.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

function Home() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Container>
        <Typography variant="h2" gutterBottom>Welcome to the LMS</Typography>
        <Button variant="contained" color="primary" component={Link} to="/courses">View Courses</Button>
      </Container>
    </div>
  );
}

export default Home;
