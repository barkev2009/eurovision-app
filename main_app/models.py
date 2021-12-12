from django.db import models


class Country(models.Model):
	name = models.CharField(max_length=255, verbose_name='Страна исполнителя')

	def __str__(self):
		return f'{self.name}'

	class Meta:
		ordering = ['name']


class Artist(models.Model):
	name = models.CharField(max_length=255, verbose_name='Имя исполнителя')
	country = models.ForeignKey(Country, verbose_name='Страна исполнителя', on_delete=models.PROTECT)

	def __str__(self):
		return f'{self.name} from {self.country}'

	class Meta:
		ordering =['name']


class Song(models.Model):
	name = models.CharField(max_length=255, verbose_name='Название песни')
	artist = models.ForeignKey(Artist, on_delete=models.PROTECT, verbose_name='Исполнитель')

	def __str__(self):
		return f'{self.name} by {self.artist}'

	class Meta:
		ordering =['name']


class ContestStep(models.Model):
	name = models.CharField(verbose_name='Название этапа конкурса', max_length=255)

	def __str__(self):
		return f'{self.name}'


class Year(models.Model):
	year = models.IntegerField(verbose_name='Год выступления', default=0)

	def __str__(self):
		return f'{self.year}'

	class Meta:
		ordering = ['-year']


class Entry(models.Model):
	song = models.ForeignKey(Song, on_delete=models.PROTECT, verbose_name='Песня')

	purity = models.FloatField(verbose_name='Чистота исполнения песни', default=0, null=True)
	show = models.FloatField(verbose_name='Наличие шоу в выступлении', default=0, null=True)
	difficulty = models.FloatField(verbose_name='Сложность исполнения песни', default=0, null=True)
	originality = models.FloatField(verbose_name='Оригинальность исполнения песни', default=0, null=True)
	sympathy = models.FloatField(verbose_name='Личная симпатия', default=0, null=True)

	place = models.IntegerField(verbose_name='Место участника', default=0, null=True)

	contest_step = models.ForeignKey(ContestStep, on_delete=models.PROTECT, verbose_name='Этап конкурса')
	order = models.IntegerField(verbose_name='Порядок выступления', default=0)
	year = models.ForeignKey(Year, verbose_name='Год выступления', on_delete=models.PROTECT)
	qualified = models.BooleanField(verbose_name='Финалист', default=False, null=True)

	def __str__(self):
		return f'Entry of song: {self.song} during the {self.contest_step} of ESC-{self.year}. ' \
		       f'Current score: {self.purity + self.show + self.difficulty + self.originality + self.sympathy}'


	class Meta:
		ordering = ['song']
