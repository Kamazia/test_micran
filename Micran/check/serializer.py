from dataclasses import fields
from rest_framework import serializers
from .models import *

class ControlSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Control
        fields = '__all__'