from django.urls import path
from . import views

urlpatterns = [
        path(route='task_list/', view=views.task_list, name='task_list'),
]
