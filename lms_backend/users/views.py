# users/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

@login_required
def user_profile(request):
    # Retrieve the current user's profile
    profile = request.user.profile  # Assuming you have a UserProfile model associated with the User model
    
    return render(request, 'users/profile.html', {'profile': profile})

@login_required
def edit_profile(request):
    if request.method == 'POST':
        # Process form data and update the user's profile
        profile = request.user.profile
        profile.bio = request.POST.get('bio')
        profile.save()
        
        return redirect('user_profile')
    else:
        # Render the edit profile form
        return render(request, 'users/edit_profile.html')

def get_users(request):
    # Retrieve all users from the database
    users = User.objects.all()
    
    # Serialize user data and return as JSON response
    data = [{'username': user.username, 'email': user.email} for user in users]
    return JsonResponse(data, safe=False)
