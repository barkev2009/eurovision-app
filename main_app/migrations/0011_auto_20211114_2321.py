# Generated by Django 2.2.12 on 2021-11-14 20:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0010_auto_20211114_2321'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='entry',
            name='score',
        ),
        migrations.DeleteModel(
            name='Star',
        ),
    ]
