from pyexpat import model
from django.db import models

# Create your models here.
class Control(models.Model):
    name = models.CharField(max_length=30,default='',verbose_name='Имя')
    amount = models.IntegerField(default=0, verbose_name='Количество проверок')
    last_check = models.CharField(max_length=30,default=None, blank=True, null=True,verbose_name='У кого проверял последний раз')


    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Сведения о проверке"
        verbose_name_plural = "Сведения о проверках"