from django.shortcuts import render


def home(request):
    return render(request, 'portal/home.html')


def games(request):
    return render(request, 'portal/games.html')


def movies(request):
    return render(request, 'portal/movies.html')


def originals(request):
    return render(request, 'portal/originals.html')
