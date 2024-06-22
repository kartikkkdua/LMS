// src/components/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>About Us</Typography>
      <Typography variant="body1">
        This is a learning management system to help you manage courses and quizzes effectively.
      </Typography>
    </Container>
  );
}

export default About;
