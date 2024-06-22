# quizzes/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/quizzes/', views.QuizListCreateAPIView.as_view(), name='quiz-list-create'),
    path('api/quizzes/<int:pk>/', views.QuizRetrieveUpdateDestroyAPIView.as_view(), name='quiz-detail'),
]
