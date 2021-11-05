from django.db import models


class Artist(models.Model):
	name = models.CharField(max_length=255, verbose_name='Имя исполнителя')
	country = models.CharField(max_length=255, verbose_name='Страна исполнителя')

	def __str__(self):
		return f'{self.name} from {self.country}'


class Song(models.Model):
	name = models.CharField(max_length=255, verbose_name='Название песни')
	artist = models.ForeignKey(Artist, on_delete=models.PROTECT, verbose_name='Исполнитель')

	def __str__(self):
		return f'{self.name} by {self.artist}'
