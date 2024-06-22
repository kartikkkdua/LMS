# zoom/views.py
from django.shortcuts import render
from django.http import HttpResponse

def zoom_list(request):
    # Your logic for listing zoom meetings
    return HttpResponse("This is the list of zoom meetings.")

def zoom_detail(request, id):
    # Your logic for displaying details of a specific zoom meeting
    return HttpResponse(f"This is the detail of zoom meeting {id}.")
