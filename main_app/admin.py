from django.contrib import admin
from .models import Song, Artist

# Register your models here.
for model in [Song, Artist]:
	admin.site.register(model)
