// src/components/Quizzes/CreateQuiz.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import './quiz.css';
function CreateQuiz() {
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quiz creation logic here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Create Quiz</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Quiz Name"
          fullWidth
          margin="normal"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <TextField
          label="Questions"
          fullWidth
          margin="normal"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">Create Quiz</Button>
      </form>
    </Container>
  );
}

export default CreateQuiz;
