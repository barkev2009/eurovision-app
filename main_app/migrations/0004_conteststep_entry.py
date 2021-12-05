# Generated by Django 2.2.12 on 2021-11-06 18:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_auto_20211106_0137'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContestStep',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название этапа конкурса')),
            ],
        ),
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.DecimalField(decimal_places=1, max_digits=2, null=True, verbose_name='Счет')),
                ('contest_step', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main_app.ContestStep', verbose_name='Этап конкурса')),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main_app.Song', verbose_name='Песня')),
            ],
        ),
    ]