from django.urls import path
from rest_framework import routers
from .views import SongViewSet, ArtistViewSet


router = routers.SimpleRouter()
router.register('songs', SongViewSet, basename='songs')
router.register('artists', ArtistViewSet, basename='artists')

urlpatterns = []
urlpatterns += router.urls