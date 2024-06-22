from django.contrib import admin
from django.urls import path, include
from users import views as users_views
from courses import views as courses_views
from quizzes import views as quizzes_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', users_views.UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', users_views.UserDetailView.as_view(), name='user-detail'),
    path('courses/', courses_views.CourseListView.as_view(), name='course-list'),
    path('courses/<int:pk>/', courses_views.CourseDetailView.as_view(), name='course-detail'),
    path('quizzes/', quizzes_views.QuizListView.as_view(), name='quiz-list'),
    path('quizzes/<int:pk>/', quizzes_views.QuizDetailView.as_view(), name='quiz-detail'),
    # Add more URL patterns as needed
    # Include URLs from individual apps
    path('api-auth/', include('rest_framework.urls')),  # Include Django Rest Framework authentication URLs
]
