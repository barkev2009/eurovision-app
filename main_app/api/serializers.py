from rest_framework import serializers
from ..models import Song, Artist, ContestStep, Entry, Country, Year


class CountrySerializer(serializers.ModelSerializer):
	class Meta:
		model = Country
		fields = ['name']


class YearSerializer(serializers.ModelSerializer):
	class Meta:
		model = Year
		fields = ['year']


class SongSerializer(serializers.ModelSerializer):
	class Meta:
		model = Song
		fields = '__all__'


class ArtistSerializer(serializers.ModelSerializer):
	country = CountrySerializer()


	class Meta:
		model = Artist
		fields = '__all__'


class SongListRetrieveSerializer(serializers.ModelSerializer):
	artist = ArtistSerializer()

	class Meta:
		model = Song
		fields = '__all__'


class ContestStepSerializer(serializers.ModelSerializer):
	class Meta:
		model = ContestStep
		fields = ['name']


class EntrySerializer(serializers.ModelSerializer):
	song = SongListRetrieveSerializer()
	contest_step = ContestStepSerializer()
	year = YearSerializer()

	class Meta:
		model = Entry
		fields = '__all__'
