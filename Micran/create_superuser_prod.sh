echo  "from django.contrib.auth import get_user_model;
User = get_user_model();
try:
    User.objects.create_superuser('admin', 'admin@myproject.com', 'admin');
except:
    print('Значение уже задано');"| python manage.py shell