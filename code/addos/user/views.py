from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def mypage(request):
    return HttpResponse("hello mypage")


def login(request):
    return HttpResponse("hello login")