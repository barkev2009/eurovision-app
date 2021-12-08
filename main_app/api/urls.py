from django.urls import path
from rest_framework import routers
from .views import SongViewSet, ArtistViewSet, EntryViewSet, YearViewSet, ContestStepViewSet, CountryViewSet


router = routers.SimpleRouter()
router.register('songs', SongViewSet, basename='songs')
router.register('artists', ArtistViewSet, basename='artists')
router.register('entries', EntryViewSet, basename='entries')
router.register('years', YearViewSet, basename='years')
router.register('contest_steps', ContestStepViewSet, basename='contest_steps')
router.register('countries', CountryViewSet, basename='countries')

urlpatterns = []
urlpatterns += router.urls