// src/components/Courses/CreateCourse.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function CreateCourse() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle course creation logic here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Create Course</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          fullWidth
          margin="normal"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">Create Course</Button>
      </form>
    </Container>
  );
}

export default CreateCourse;
