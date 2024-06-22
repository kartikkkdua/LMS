# courses/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/courses/', views.CourseListCreateAPIView.as_view(), name='course-list-create'),
    path('api/courses/<int:pk>/', views.CourseRetrieveUpdateDestroyAPIView.as_view(), name='course-detail'),
]
