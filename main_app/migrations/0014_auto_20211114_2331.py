# Generated by Django 2.2.12 on 2021-11-14 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0013_auto_20211114_2326'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='entry',
            name='score',
        ),
        migrations.AddField(
            model_name='entry',
            name='difficulty',
            field=models.BooleanField(default=False, verbose_name='Сложность исполнения песни'),
        ),
        migrations.AddField(
            model_name='entry',
            name='originality',
            field=models.BooleanField(default=False, verbose_name='Оригинальность исполнения песни'),
        ),
        migrations.AddField(
            model_name='entry',
            name='purity',
            field=models.BooleanField(default=False, verbose_name='Чистота исполнения песни'),
        ),
        migrations.AddField(
            model_name='entry',
            name='show',
            field=models.BooleanField(default=False, verbose_name='Наличие шоу в выступлении'),
        ),
        migrations.AddField(
            model_name='entry',
            name='sympathy',
            field=models.BooleanField(default=False, verbose_name='Личная симпатия'),
        ),
        migrations.DeleteModel(
            name='Star',
        ),
    ]