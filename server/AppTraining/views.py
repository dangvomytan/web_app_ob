from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Output index")
# Create your views here.
