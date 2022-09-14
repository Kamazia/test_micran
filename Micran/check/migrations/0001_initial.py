from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Control',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=30, verbose_name='Имя')),
                ('amount', models.IntegerField(default=0, verbose_name='Количество проверок')),
                ('last_check', models.CharField(blank=True, default=None, max_length=30, null=True, verbose_name='У кого проверял последний раз')),
            ],
            options={
                'verbose_name': 'Сведения о проверке',
                'verbose_name_plural': 'Сведения о проверках',
            },
        ),
    ]
