from django.urls import path
from . import views

urlpatterns = [
    path(route='', view=views.inicio, name='inicio'),
    path(route='catalogo/', view=views.catalogo, name='catalogo'),
    path(route='saudacao/<str:nome>/', view=views.saudacao, name='saudacao'),
    path(route='sobre/', view=views.sobre, name='sobre'),
]
