// src/components/Quizzes/QuizList.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import './quiz.css';
function QuizList() {
  const quizzes = [
    { id: 1, name: 'Quiz 1' },
    { id: 2, name: 'Quiz 2' },
    { id: 3, name: 'Quiz 3' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Quizzes</Typography>
      <List>
        {quizzes.map(quiz => (
          <ListItem key={quiz.id}>
            <ListItemText primary={quiz.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default QuizList;
