from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('games/', views.games, name='games'),
    path('movies/', views.movies, name='movies'),
    path('originals/', views.originals, name='originals'),
    path('', include('auth_system.urls')),
]
