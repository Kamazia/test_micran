from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from .serializer import *


class ControlViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Control.objects.all()
    serializer_class = ControlSerilizer

