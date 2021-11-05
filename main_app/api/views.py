from rest_framework import viewsets
from .serializers import SongSerializer, ArtistSerializer, SongListRetrieveSerializer
from ..models import Song, Artist


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
