from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import (
	SongSerializer,
	ArtistSerializer,
	SongListRetrieveSerializer,
	ContestStepSerializer,
	EntrySerializer,
	YearSerializer,
	CountrySerializer
)
from ..models import Song, Artist, ContestStep, Entry, Year, Country


class SongViewSet(viewsets.ModelViewSet):
	queryset = Song.objects.all()
	serializer_class = SongSerializer

	action_to_serialize = {
		'list': SongListRetrieveSerializer,
		'retrieve': SongListRetrieveSerializer
	}

	def get_serializer_class(self):
		return self.action_to_serialize.get(
			self.action,
			self.serializer_class
		)


class ArtistViewSet(viewsets.ModelViewSet):
	queryset = Artist.objects.all()
	serializer_class = ArtistSerializer


class EntryViewSet(viewsets.ModelViewSet):
	queryset = Entry.objects.all()
	serializer_class = EntrySerializer


class YearViewSet(viewsets.ModelViewSet):
	queryset = Year.objects.all()
	serializer_class = YearSerializer


class ContestStepViewSet(viewsets.ModelViewSet):
	queryset = ContestStep.objects.all()
	serializer_class = ContestStepSerializer


class CountryViewSet(viewsets.ModelViewSet):
	queryset = Country.objects.all()
	serializer_class = CountrySerializer