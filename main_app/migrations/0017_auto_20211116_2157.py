# Generated by Django 2.2.12 on 2021-11-16 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0016_auto_20211116_1521'),
    ]

    operations = [
        migrations.CreateModel(
            name='Year',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField(default=0, verbose_name='Год выступления')),
            ],
        ),
        migrations.AlterField(
            model_name='entry',
            name='year',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main_app.Year', verbose_name='Год выступления'),
        ),
    ]
