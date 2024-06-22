# courses/models.py
from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=100)
    instructor = models.CharField(max_length=100)
    description = models.TextField()
    enrollment_status = models.BooleanField(default=False)

    def __str__(self):
        return self.name
