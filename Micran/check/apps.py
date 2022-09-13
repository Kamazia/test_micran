from django.apps import AppConfig


class CheckConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'check'
    verbose_name: str = "Проверка merge request'ов"
