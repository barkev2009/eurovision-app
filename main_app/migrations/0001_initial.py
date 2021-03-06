# Generated by Django 2.2.12 on 2021-11-05 17:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя исполнителя')),
                ('country', models.CharField(max_length=255, verbose_name='Страна исполнителя')),
            ],
        ),
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название песни')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main_app.Artists', verbose_name='Исполнитель')),
            ],
        ),
    ]
