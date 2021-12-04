from django.contrib import admin
from .models import (
	Song,
	Artist,
	ContestStep,
	Entry,
	Country,
	Year
)

# Register your models here.
for model in (Song, Artist, ContestStep, Entry, Country, Year):
	admin.site.register(model)
