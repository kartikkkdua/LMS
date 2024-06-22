# quizzes/models.py
from django.db import models

class Quiz(models.Model):
    title = models.CharField(max_length=100)
    questions = models.TextField()

    def __str__(self):
        return self.title
