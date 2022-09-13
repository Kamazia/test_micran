from .api import *
from .views import assign_check
from rest_framework import routers
from django.urls import path,include


router = routers.DefaultRouter()
router.register('control',ControlViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('assign_check/<int:pk>',assign_check, name='assign_check'),
]