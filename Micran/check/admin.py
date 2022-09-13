from django.contrib import admin
from .models import Control

# Register your models here.


@admin.register(Control)
class ControlAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'amount',
        'last_check'
    )