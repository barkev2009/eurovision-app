# Generated by Django 2.2.12 on 2021-12-09 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0017_auto_20211116_2157'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='artist',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='country',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='entry',
            options={'ordering': ['song']},
        ),
        migrations.AlterModelOptions(
            name='song',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='year',
            options={'ordering': ['-year']},
        ),
        migrations.AlterField(
            model_name='entry',
            name='difficulty',
            field=models.FloatField(default=0, null=True, verbose_name='Сложность исполнения песни'),
        ),
        migrations.AlterField(
            model_name='entry',
            name='originality',
            field=models.FloatField(default=0, null=True, verbose_name='Оригинальность исполнения песни'),
        ),
        migrations.AlterField(
            model_name='entry',
            name='purity',
            field=models.FloatField(default=0, null=True, verbose_name='Чистота исполнения песни'),
        ),
        migrations.AlterField(
            model_name='entry',
            name='qualified',
            field=models.BooleanField(default=False, null=True, verbose_name='Финалист'),
        ),
        migrations.AlterField(
            model_name='entry',
            name='show',
            field=models.FloatField(default=0, null=True, verbose_name='Наличие шоу в выступлении'),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sympathy',
            field=models.FloatField(default=0, null=True, verbose_name='Личная симпатия'),
        ),
    ]
