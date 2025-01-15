# from django.urls import path
# from . import views


# urlpatterns = [
#     path('',views.getRoutes, name ='Routes'),
#     path('notes/',views.getNotes, name= 'notes'),
#      path('notes/create/',views.createNote,name="create-note"),
#     path('notes/<str:pk>/',views.getNote, name= 'notes'),
   
#     path('notes/<str:pk>/update/', views.updateNote,name="notes-update"),
#     path('notes/<str:pk>/delete/',views.deleteNote,name="delete-note")
# ]

# notes/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet

# Create a router and register the ViewSet
router = DefaultRouter()
router.register(r'notes', NoteViewSet, basename='note')

urlpatterns = [
    path('', include(router.urls)),  # Include all the routes from the router
]
